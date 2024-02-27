import React from 'react';
import { useState } from 'react';

function Count(){
    const fistcount=10;
    const [count, setCount] = useState(fistcount);
    
    function Increment() {
        setCount(i => i +  1)
      }
      function Decrement() {
        setCount(d => d -  1)
      }
      function Reset() {
        setCount("0")
      }
      
    return (  
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement} >Decrement</button>
            <button onClick={Reset}>Reset</button>
            
        </div>
    )
}
export  default Count;
