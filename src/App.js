import React, { useState, useCallback } from 'react'
import { Button } from './Button'
import { Square } from './Square'
import { Circle } from './Circle'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const favoriteNums = [7, 21, 37]

  const increment = useCallback((n) => {
    setCount(c => c + n)
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
            <Button increment={increment} n={100} />
          </div>
          <div className="app__buttons">
            {favoriteNums.map(n => (
                <div className="app__circle">
                  <Circle increment={increment} n={n} key={n}/>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
