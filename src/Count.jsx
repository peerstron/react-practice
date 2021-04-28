import React, {useState, useEffect} from "react";
// import { button } from "tailwindcss";


const Count = () =>{
    useEffect(() =>{
        console.log("Count Component Mounted");
    }, []);

    const [count, setCount] = useState(0);
    return(
        <>
            <p>Count is:   {count}</p>

            <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}

export default Count;