import React from 'react'

function Button({ handleClick, children, n, type }) {
    console.log(`Rendering button - `, children)
    return (
        <button onClick={() => handleClick(n, type)}>
            {children}
        </button>
    )
}

export default React.memo(Button)