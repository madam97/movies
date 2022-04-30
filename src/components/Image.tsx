type ImageProps = {
  src: string | null,
  alt: string
}

export default function Image({ src, alt }: ImageProps) {
  return (
    <div className="min-h-60 bg-light">
      {src && <img className="w-full min-h-60" src={src} alt={alt} title={alt} />}
    </div>
  )
}