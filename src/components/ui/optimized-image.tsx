import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false,
  onLoad,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = src;

    if (priority) {
      img.loading = 'eager';
    }

    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
      onLoad?.();
    };

    // Cleanup
    return () => {
      img.onload = null;
    };
  }, [src, priority, onLoad]);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Blur placeholder */}
      {!isLoaded && (
        <div className='absolute inset-0 bg-muted animate-pulse' />
      )}

      {/* Actual image */}
      <img
        src={currentSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding='async'
        className={cn(
          'transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
      />
    </div>
  );
};
