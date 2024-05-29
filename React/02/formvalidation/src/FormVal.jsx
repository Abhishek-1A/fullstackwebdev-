import React from "react";

import './Form.css'
import { useState } from "react";
import { useTransition } from "react";
const FormVal = () => {

function handlesubmit(e){
  e.preventDefault();
  
  console.log("form submited");
}
// STATES
const [name, Setname] = useState('');
const[email, SetEmail] = useState('');
const[password, SetPassword] = useState('');
const [conformpassword, SetConformpassword] = useState('');
const[age, SetAge] = useState('');
const[gender, SetGender] = useState('');
const[error, Seterror] = useState('');

  return (
  <div className="container">
     <h1>Form Validation</h1>

     <form onSubmit={handlesubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) =>{
         Setname(e.target.value);
        }}></input>
      </div>
      <div>
        <label>Email:</label>
        <input type='Email' value={email} onChange={(e) =>{
          SetEmail(e.target.value);
        }}></input>
      </div>
      <div>
        <label>Password:</label>
        <input type='Password' value={password} onClick={(e)=>{
          SetPassword(e.target.value);
        }}></input>
      </div>
      <div>
        <label>Conform Password:</label>
        <input type='passsword' value={conformpassword} onChange={(e) =>{
          SetConformpassword(e.target.value);
        }}></input>
      </div>
      <div>
        <label>Age:</label>
        <input type="text"></input>
      </div>
      <div>
        <label>Gender:</label>
        <select  value={gender} onChange={(e) =>{
          SetGender(e.target.value);
        }}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="FeMale">Male</option>
        </select>
      </div>
      <button >Submit</button>
     </form>
    </div>
)
};

export default FormVal;
