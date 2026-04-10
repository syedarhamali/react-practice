import { useContext, useState } from "react"
import { AppContext } from "../../context"

function Counter() {
        const {theme } = useContext(AppContext)
    
        console.log(theme , "theme from context")
    //   variable name , variable update function 
    const [count, setCount] = useState(0)
    // var count = 0

    const incrementCounter = () => {
        setCount(count + 1) //srf set state function se hi variable update hoga
        // if(count >= 4){
        //     setCount(0)
        // }
    }

    const resetCounter = () =>{
        setCount(0)
    }

    return (
        <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <p>{count}</p>

            <button onClick={incrementCounter}>Increment</button>
            <button onClick={resetCounter}>Reset</button>

        </div>
    )
}

export default Counter