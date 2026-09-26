interface LazyIframeProps {
  src: string
  title: string
  className?: string
  height?: string
  id?: string
}

export default function LazyIframe({ src, title, className, height, id }: LazyIframeProps) {
  return (
    <iframe
      src={src}
      title={title}
      id={id}
      className={className}
      style={{ width: '100%', height: height || '100%', border: 'none', borderRadius: '3px' }}
    />
  )
}
