import React from 'react'
import './App.css'
import { useState } from 'react'
export default function App() {
  const [emailstatus, setemailstatus] = useState(false)
  const [passwordstatus, setpasswordstatus] = useState(false)
  const [fname, setfname] = useState('')
  const [lname, setlname] = useState('')


  function emailtest(value) {
    if ((/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)) || (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/.test(value))) {
      setemailstatus(true) 
    }

  }
  function passwordtest(value) {
    if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(value)) {
      setpasswordstatus(true)
    }
  }
  function validate() {
    if (!emailstatus) {
      // alert("enter email")
      document.getElementById('email').style.display = 'block';
    }
    if (!passwordstatus) {
      // alert("enter valid password")
      document.getElementById('password').style.display = 'block';
    }
    if (!fname) {
      // alert("enter valid first name")
      document.getElementById('fname').style.display = 'block';
    }
    if (!lname) {
      // alert("enter valid last name")
      document.getElementById('lname').style.display = 'block';
    }
    if (emailstatus && passwordstatus && fname && lname) {
      window.location.replace('http://www.google.com')
    }

  }
  return (
    <center>
    <div className='form'>
    <div>
      <h2>Sign Up</h2>
      <input type='text' placeholder='First name'  onChange={(e) => setfname(e.target.value)} ></input>  <label id='fname' style={{ display: "none", fontSize: '12px', color: 'red' }}>*Enter your first name</label><br></br>
      <input type='text' placeholder='Last name' onChange={(e) => setlname(e.target.value)} ></input><label id='lname' style={{ display: "none", fontSize: '12px', color: 'red' }}>*Enter your last name</label><br></br>
      <input type='text' placeholder='Email / Phonenumber' onChange={(e) => emailtest(e.target.value)}></input><label id='email' style={{ display: "none", fontSize: '12px', color: 'red' }}>*Enter your email/phonenumber</label><br></br>
      <input type='password' placeholder='Create Password (should have special characters)' onChange={(e) => passwordtest(e.target.value)}></input><label id='password' style={{ display: "none", fontSize: '12px', color: 'red' }}>*Enter Valid Password</label><label id='password' style={{ display: "none", fontSize: '12px', color: 'red' }}>*Enter valid password</label><br></br>
      <button className='but' onClick={() => validate()}>SUBMIT</button>
      </div>
    </div>
    </center>
  )
}
