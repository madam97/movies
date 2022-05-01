import { defBreakpoints } from '../config'
import TBreakpoint from '../types/TBreakpoint'

type PictureProps = {
  /** More classes for the root element */
  className?: string,
  /** The image's source file path */
  src: string | null,
  /** The alt and title value of the img element */
  alt: string,
  /** Possible sizes depending on the given breakpoints */
  sizes: Record<TBreakpoint, string>,
  /** Default and on mobile device size */
  defSize: string
}

export default function Picture({ className, src, alt, sizes, defSize }: PictureProps) {

  const sources: JSX.Element[] = [];
  if (src) {
    for (const [key, size] of Object.entries(sizes)) {
      const breakpoint = key as TBreakpoint;
  
      sources.push(
        <source 
          key={breakpoint}
          media={`(min-width: ${defBreakpoints[breakpoint]})`} 
          srcSet={src.replace('SIZE', size)}
        />
      );
    }
  }

  return (
    <div className={`flex min-h-60 bg-light ${className}`}>
      {src && sources.length > 0 &&
        <picture className="w-full">
          {sources}
          <img 
            className="w-full h-full object-cover"
            src={src.replace('SIZE', defSize)} 
            alt={alt}
            title={alt}
          />
        </picture>
      }
    </div>
  )
}