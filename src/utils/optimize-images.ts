/**
 * Utilidades para optimizar imágenes del portfolio en build time.
 * Usa getImage() de Astro para convertir ImageMetadata → WebP optimizado
 * con tamaños responsivos adecuados al contexto de uso.
 */
import { getImage } from 'astro:assets';
import type { PersonalInfo, Project } from '@/data/types';

/** Imagen pre-optimizada lista para consumir en React */
export interface OptimizedImage {
  src: string;
  width: number;
  height: number;
  srcSet?: string;
}

/** Genera una imagen optimizada en WebP al tamaño indicado */
async function optimizeImage(
  image: ImageMetadata,
  width: number,
): Promise<OptimizedImage> {
  const result = await getImage({
    src: image,
    width,
    format: 'webp',
    quality: 80,
  });
  return {
    src: result.src,
    width: result.attributes.width as number,
    height: result.attributes.height as number,
  };
}

/** Genera una imagen con srcSet responsivo (1x y 2x) */
async function optimizeImageResponsive(
  image: ImageMetadata,
  displayWidth: number,
): Promise<OptimizedImage> {
  const [img1x, img2x] = await Promise.all([
    getImage({ src: image, width: displayWidth, format: 'webp', quality: 80 }),
    getImage({ src: image, width: displayWidth * 2, format: 'webp', quality: 75 }),
  ]);

  return {
    src: img1x.src,
    width: img1x.attributes.width as number,
    height: img1x.attributes.height as number,
    srcSet: `${img1x.src} ${displayWidth}w, ${img2x.src} ${displayWidth * 2}w`,
  };
}

/**
 * Optimiza el avatar de PersonalInfo.
 * Display: 128x128 (w-32), generamos 128 y 256 (2x para retina)
 */
export async function optimizePersonalImages(
  personal: PersonalInfo,
): Promise<PersonalInfo> {
  if (!personal.avatar) return personal;

  const optimized = await optimizeImageResponsive(personal.avatar, 128);
  return {
    ...personal,
    avatar: optimized as unknown as ImageMetadata,
  };
}

/**
 * Optimiza imágenes de proyectos:
 * - Card thumbnail: ~400px (aspect-video en grid responsivo)
 * - Hero detail: ~1100px (max-w-6xl con padding)
 * - Gallery: ~550px (grid 2-col dentro de max-w-3xl)
 */
export async function optimizeProjectImages(
  projects: Project[],
): Promise<Project[]> {
  return Promise.all(
    projects.map(async (project) => {
      const optimized = { ...project };

      // Imagen principal — usada como card (~400px) y hero detail (~1100px)
      // Optimizamos a 800px con srcSet para cubrir ambos contextos
      if (project.image) {
        const img = await optimizeImageResponsive(project.image, 800);
        optimized.image = img as unknown as ImageMetadata;
      }

      // Galería — se muestra en grid 2-col (~550px cada imagen)
      if (project.gallery?.length) {
        optimized.gallery = await Promise.all(
          project.gallery.map(async (item) => ({
            ...item,
            image: (await optimizeImageResponsive(
              item.image,
              550,
            )) as unknown as ImageMetadata,
          })),
        );
      }

      return optimized;
    }),
  );
}
