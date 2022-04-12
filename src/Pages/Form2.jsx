import React from "react";
import { RegistrationContext } from "../Context/RegistrationContext";
import { Navigate } from "react-router-dom";

export const Form2 = () => {
  const {
      dispatch,
      stateOfResidence,
     address,
     pincode,
     name,
     age,
     dateOfBirth,
     handleSubmit
  } = React.useContext(RegistrationContext);

  if(!name || !age || !dateOfBirth){
      return <Navigate to="/registration/one"></Navigate>
  }
  return (
      <div>
          <input placeholder="State of Residence" type="text" value={stateOfResidence} onChange={(e) => dispatch({
              type:"CHANGE_STATE_OF_RESIDENCE",
              payload:e.target.value
          })}></input>
          <br/>
          <input placeholder="Address" type="text" value={address} onChange={(e) => dispatch({
              type:"CHANGE_ADDRESS",
              payload:e.target.value
          })}></input>
          <br/>
          <input placeholder="pincode" type="text" value={pincode} onChange={(e) => dispatch({
              type:"CHANGE_PINCODE",
              payload:e.target.value
          })}></input>
          <br/>
          <button disabled ={
              !stateOfResidence ||
              !address ||
              !pincode ||
              !name ||
              !age ||
              !dateOfBirth
          } 
          onClick={handleSubmit}>Submit</button>
          
      </div>
  );
;}
