import React from "react";
import Employee from "./Employee";
const Emps = require("./Emps.json");
function Company(){
    return(
        <>
            <h3>Company Directory</h3>
            <Employee emps={Emps}/>
        </>
    )
}

export default Company;