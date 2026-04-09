import { createElement } from 'react';

type ImageLike = {
  src: string;
  width?: number;
  height?: number;
  srcSet?: string;
};

interface SmartImageProps {
  image: ImageLike;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'sync' | 'async' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function SmartImage({
  image,
  alt,
  className,
  sizes,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
}: SmartImageProps) {
  return createElement('img', {
    src: image.src,
    alt,
    width: image.width,
    height: image.height,
    className,
    loading,
    decoding,
    fetchpriority: fetchPriority,
    ...(image.srcSet && { srcSet: image.srcSet }),
    ...(sizes && { sizes }),
  });
}
