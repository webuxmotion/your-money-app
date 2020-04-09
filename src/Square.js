import React, { useRef, useCallback } from 'react'
import { useCountRenders } from './useCountRenders'

export const Square = React.memo(({ increment, n }) => {
  useCountRenders('square')
  
  return <button onClick={() => increment(n)}>{n}</button>
})
