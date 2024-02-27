import React from 'react';
import { useState } from 'react';
function  Count() {
    const InitialCount=10;
    const [count, setCount] = useState(InitialCount);
    
    
    return(
        <div>
            <h1>count:{count}</h1>
           <button onClick={()=>setCount(InitialCount)}>Reset</button>
           <button onClick={()=>setCount(prevCount => prevCount +1)}>Increase</button>
           <button onClick={()=>setCount(prevCount => prevCount -1)}>decrease</button>
           
           </div>
    )
}
export default Count



