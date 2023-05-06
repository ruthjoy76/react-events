import { useState } from "react"

function Counter() {
  
   const [counter, setCounter] = useState(0);
    
    const handleIncrementButton = () => {
      setCounter(counter + 1)
    }
    
    const handleDecrementButton = () => {
      setCounter(counter - 1)
    }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrementButton}>Increment</button>
      <button onClick={handleDecrementButton}>Decrement</button>
    </div>
  );

}

export default Counter;
