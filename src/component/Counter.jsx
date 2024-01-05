import React, { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)
    const date = new Date("August 14 2023")
    date.setDate(date.getDate() + count)
    

  return (
    <>
       
    <div>
        <button onClick={()=> setStep ((c) => c - 1)}>-</button>
        <span>Your Step is: {step}</span>
        <button onClick={()=> setStep ((c) => c + 1)}>+</button> <br />
        
        <button onClick={()=> setCount ((c) => c - step)}>-</button>
        <span>Your Count is: {count}</span>
        <button onClick={()=> setCount ((c) => c + step)}>+</button>

            <p>
                <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` 
                : `${Math.abs(count)} days ago was `}</span>
                <span>{date.toDateString()}</span>
            </p>
        </div>
        
    </>
  )
}

export default Counter