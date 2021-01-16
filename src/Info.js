import { useSpring, animated } from 'react-spring'
import React from 'react'

// Copy from the internet
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const Info = ({ number, crit }) => {
  const props = useSpring({ from: { value: 0 }, to: { value: number } })

  return (
    <div className="bg-gray-200 w-24 text-center rounded-xl p-3">
      <animated.div className="text-gray-600">
        {props.value.interpolate((x) => formatNumber(parseInt(x)))}
      </animated.div>
      <div className="text-gray-400 text-xs">{crit}</div>
    </div>
  )
}

export default Info
