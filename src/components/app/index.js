import React, { useCallback, useMemo, useState } from 'react'
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
      <div className="app__card">
        <div className="app__header">
          <h2>Your money app</h2>
        </div>
        <div className="app__body">
          <div className="app__sum">${count}</div>
          <div className="app__big-button">
            <Button clickHandler={increment} n={100} text="+$100" color="blue" />
          </div>
          <div className="app__buttons">
            {nums.map(n => (
              <div className="app__circle" key={n}>
                <Circle increment={increment} n={n} />
              </div>
            ))}
          </div>
        </div>
        <div className="app__footer">
            <Button clickHandler={resetCount} n={0} text="Reset money" color="green" disabled={count === 0 ? true : false} />
        </div>
      </div>
    </div>
  )
}

export default App
