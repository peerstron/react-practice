import React, { useEffect } from "react";

import Count from './Count'

export default function Counter({showCounter}){
    useEffect(() =>{
        console.log("Counter Component Mounted");
    }, []);
    return(
        <div>
            <h2>Counter here</h2>
            {showCounter && <Count />}
        </div>
    )
}

// const Counter = () =>{
//     return(
//         <>
//             <h4>Test Counter</h4>
//             <Count />
//         </>
//     )
// }


// export default Counter;