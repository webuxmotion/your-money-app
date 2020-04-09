import React from 'react'
import { useCountRenders } from './useCountRenders'
import './Button.css'

export const Button = React.memo(({ increment, n }) => {
  useCountRenders('hello')
  
  return <button className="button" onClick={() => increment(n)}>+${n}</button>
})
