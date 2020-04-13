import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(29)
    const [salary, setSalary] = useState(4500)

    const increment = (prev, n) => {
        return prev + n
    }

    const handleClick = useCallback((n, type) => {
        switch (type) {
            case 'age':
                setAge((prev) => increment.apply(this, [prev, n]))
                break;
            case 'salary':
                setSalary((prev) => increment.apply(this, [prev, n]))
        }
    }, [setAge, setSalary])

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={handleClick} n={1} type="age">Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={handleClick} n={200} type="salary">Increment Salary</Button>
        </div>
    )
}

export default ParentComponent