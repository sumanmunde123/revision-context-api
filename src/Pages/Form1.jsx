import React from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationContext } from "../Context/RegistrationContext";


export const Form1 = () => {
    const {name, age, dateOfBirth, dispatch} = 
    React.useContext(RegistrationContext);
    const navigate = useNavigate();

    return(
        <div>
            <input placeholder="Name" type="text" value={name} onChange={(e) => dispatch({type:"CHANGE_NAME", payload:e.target.value})}>
            </input>
            <br/>
            <input  placeholder="Age" type="text" value={age} onChange={(e) => dispatch({type:"CHANGE_AGE", payload:e.target.value})} >
            </input>
            <br/>
            <input  placeholder="date of birth" type="text" value={dateOfBirth} onChange={(e) => dispatch({type:"CHANGE_DATE_OF_BIRTH", payload:e.target.value})} >
            </input>
            <br/>
            <button disabled={!name && !age && !dateOfBirth}
            onClick={() => {
                navigate(`/registration/two`);
            }}>NEXT</button>
        </div>
    );
};