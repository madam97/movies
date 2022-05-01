type ImageProps = {
  src: string | null,
  alt: string,
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