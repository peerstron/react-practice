import React from "react";

function Employee(props){

    return(
        <>
            <h4>Employees</h4>
            {props.emps.map(({id, name, city})=>{
                return (<h5 key={id}>{`${name}   ${city}`}</h5>)
            })}

        </>
    )
}

export default Employee;