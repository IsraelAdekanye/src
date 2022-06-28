import React from "react";
import './Person.css';

const Person = (props) => {
    return(
        <div className="MyDiv">
            <h1 onClick={props.onlick}>My name is {props.name} and I am {props.age} years old...</h1>
            {/* <input type="text" onChange={props.changed} value={props.name} /> */}
        </div>
    )
}

export default Person;