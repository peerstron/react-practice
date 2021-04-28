import React, {useState, useEffect} from "react";
// import { button } from "tailwindcss";


const Count = () =>{
    const [count, setCount] = useState(0);
    useEffect(() =>{
        console.log("Count changed");
    }, [count]);

    
    return(
        <>
            <p>Count is:   {count}</p>

            <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}

export default Count;