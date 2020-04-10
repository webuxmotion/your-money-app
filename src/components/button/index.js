import React from 'react'
import { useCountRenders } from '../../hooks/useCountRenders'
import './styles.css'

const Button = React.memo(({ clickHandler, n, text, color, ...rest }) => {
    useCountRenders(text)
    return <button {...rest} className={`button button--color--${color}`} onClick={() => clickHandler(n)}>{text}</button>
})

export default Button
