import React, { useCallback, useMemo, useState } from 'react'
import Video from '../video'
import Button from '../button/index'
import Circle from '../circle/index'
import './styles.css'

function App() {
  const [count, setCount] = useState(() => +localStorage.getItem('count') || 0)
  const nums = [7, 21, 37, 900]

  const increment = useCallback((n) => {
    setCount(c => {
      const newValue = c + n
      localStorage.setItem('count', newValue)
      return newValue
    });
  }, [setCount])

  const resetCount = useCallback((n) => {
    setCount(_ => {
      localStorage.setItem('count', n)
      return n
    });
  }, [setCount])

  return (
    <div className="app">
      <div>
        <Video />
      </div>
    </div>
  )
}

export default App
