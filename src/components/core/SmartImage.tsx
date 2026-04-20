import { createElement } from 'react';

type ImageLike = {
  src: string;
  width?: number;
  height?: number;
};

interface SmartImageProps {
  image: ImageLike;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  decoding?: 'sync' | 'async' | 'auto';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
}

export function SmartImage({
  image,
  alt,
  className,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority = 'auto',
  sizes,
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
    ...(sizes ? { sizes } : {}),
  });
}
