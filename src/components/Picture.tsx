import { defBreakpoints } from '../config'
import TBreakpoint from '../types/TBreakpoint'

type PictureProps = {
  src: string | null,
  alt: string,
  sizes: Record<TBreakpoint, string>,
  defSize: string
}

export default function Picture({ src, alt, sizes, defSize }: PictureProps) {

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
    <div className="flex min-h-60 bg-light">
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