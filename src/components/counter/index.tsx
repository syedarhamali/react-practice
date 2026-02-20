import { useState } from "react"

function Counter() {
    //   variable name , variable update function 
    const [count, setCount] = useState(0)
    // var count = 0

    const incrementCounter = () => {
        setCount(count + 1)
        if(count >= 4){
            setCount(0)
        }
    }

    const resetCounter = () =>{
        setCount(0)
    }

    return (
        <div>
            <p>{count}</p>

            <button onClick={incrementCounter}>Increment</button>
            <button onClick={resetCounter}>Reset</button>

        </div>
    )
}

export default Counter