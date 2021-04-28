import Reat, { useEffect, useState } from "react";
import axios from "axios";

export default function Todos (){
    const [todos, setTodos] = useState();
    console.log(todos);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then( res=> {
                const todoResponse = res.data;
                setTodos(todoResponse);
            })
    }, []);
    return(
        <>
            {todos && todos.map(({id, name, email})=>{
                return (
                    <p key={id}>Name: {name} Email: {email}</p>
                )
            })}
        </>
    )
}