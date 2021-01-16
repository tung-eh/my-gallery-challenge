import { useSpring, animated } from 'react-spring'
import React, { useState, useRef, useEffect } from 'react'

import Image from './Image'

const ipOptions = {
  threshold: 0.75,
}

const ShowcaseImage = ({ className = '', alt, left, right, ...props }) => {
  const [shouldDisplay, setShouldDisplay] = useState(false)
  const ref = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldDisplay(true)
          }
        }),
      ipOptions
    )
    observer.observe(ref.current)
  }, [])

  const spring = useSpring(
    shouldDisplay
      ? {
          transform: 'translateX(0)',
          opacity: 1,
        }
      : {
          transform: `translateX(${left ? -500 : right ? 500 : 0}px)`,
          opacity: 0,
        }
  )

  return (
    <div ref={ref} className={className}>
      <Image
        Component={animated.img}
        className={`rounded-xl shadow-xl `}
        alt={alt}
        style={spring}
        {...props}
      />
    </div>
  )
}

export default ShowcaseImage
