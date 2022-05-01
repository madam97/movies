type ImageProps = {
  /** The image's source file path */
  src: string | null,
  /** The alt and title value of the img element */
  alt: string,
  /** The size of the image */
  size: string
}

export default function Image({ src, alt, size }: ImageProps) {
  return (
    <div className="flex min-h-60 bg-light">
      {src && 
        <img 
          className="w-full object-cover" 
          src={src.replace('SIZE', size)} 
          alt={alt} 
          title={alt}
        />}
    </div>
  )
}