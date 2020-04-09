import React from 'react'
import { useCountRenders } from '../../hooks/useCountRenders'
import './styles.css'

const Button = React.memo(({ increment, n }) => {
    useCountRenders('button')
    return <button className="button" onClick={() => increment(n)}>+${n}</button>
})

export default Button
