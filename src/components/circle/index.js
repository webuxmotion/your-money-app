import React from 'react'
import { useCountRenders } from '../../hooks/useCountRenders'
import './styles.css'

const Button = React.memo(({ increment, n }) => {
    useCountRenders('circle')
    return <div className="circle" onClick={() => increment(n)}>+{n}</div>
})

export default Button