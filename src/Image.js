import React, { useState, useEffect } from 'react'

const Image = ({
  src: srcProp,
  alt,
  width = 0,
  height = 0,
  Component = 'img',
  ...props
}) => {
  const [src, setSrc] = useState(
    `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"%3E%3C/svg%3E`
  )
  useEffect(() => {
    setSrc(srcProp)
  }, [srcProp])

  return (
    <Component
      src={src}
      alt={alt}
      {...props}
      widht={width}
      height={height}
      {...props}
    />
  )
}

export default Image
