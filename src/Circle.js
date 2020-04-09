import React, { useRef, useCallback } from 'react'
import { useCountRenders } from './useCountRenders'
import './Circle.css'

export const Circle = React.memo(({ increment, n }) => {
  useCountRenders('square')
  
  return <div className="circle" onClick={() => increment(n)}>+{n}</div>
})
