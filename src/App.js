import './App.css';
import React, { useState } from 'react';
let count = 0;
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [emailBorderColor, setEmailBorderColor] = useState("");
  const [passwordBorderColor, setPasswordBorderColor] = useState("");
  const [cPasswordBorderColor, setCPasswordBorderColor] = useState("");
  const [emailWarn, setEmailWarn] = useState("none");
  const [passWarn, setPassWarn] = useState("none");
  const [cPassWarn,setCPassWarn] = useState("none");
  const [submitWarn, setSubmitWarn] =useState("none");



  function handleEmailChanges(e) {
    const emailValue = e.target.value;
    setEmail(emailValue);
    count = 0;

    if (emailValue.includes("@") && emailValue.includes(".")) {
      setEmailBorderColor("green");
      setEmailWarn("none")
    } else {
      setEmailBorderColor("red");
      setEmailWarn("block");
      count += 1;
    }
  }

  function handleEmailFocus() {
    setEmailBorderColor("blue");
  }

  function handleEmailBlur() {
    if (email.includes("@") && email.includes(".")) {
      setEmailBorderColor("green");
      setEmailWarn("none")
    } else {
      setEmailBorderColor("red");
      setEmailWarn("block");
      count += 1;
    }
  }


  function handlePasswordChanges(e) {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    count = 0;

    if (passwordValue.length >=8) {
      setPasswordBorderColor("green");
      setPassWarn("none")
    } else {
      setPasswordBorderColor("red");
      setPassWarn("block");
      count += 1;
    }
  }

  function handlePasswordFocus() {
    setPasswordBorderColor("blue");
  }

  function handlePasswordBlur() {
    if (password.length >=8) {
      setPasswordBorderColor("green");
      setPassWarn("none")
    } else {
      setPasswordBorderColor("red");
      setPassWarn("block");
      count += 1;
    }
  }


  function handleCPasswordChanges(e) {
    const cPasswordValue = e.target.value;
    setCPassword(cPasswordValue);
    count = 0;

    if (cPasswordValue == password) {
      setCPasswordBorderColor("green");
      setCPassWarn("none");
      
    } else {
      setCPasswordBorderColor("red");
      setCPassWarn("block");
      count += 1;

    }
  }

  function handleCPasswordFocus() {
    setCPasswordBorderColor("blue");
  }

  function handleCPasswordBlur() {
    if (cPassword == password) {
      setCPasswordBorderColor("green");
      setCPassWarn("none");

    } else {
      setCPasswordBorderColor("red");
      setCPassWarn("block");
      count += 1;

    }
  }

  function SubmitForm(){
    if(email =="" || password =="" || cPassword =="")
    {
      setSubmitWarn("block");
      alert("Form cannot be submitted!");
    }else if(count>0){
      alert("Form cannot be submitted!");
      // console.log("xxxxxxxxxxxxxxx",count);
    } else {
      setSubmitWarn("none");
      alert("Form submitted successfully!!");
    }
  }



  return (
    <div id="main">
      <form id="form">
        <label>Email:</label>
        <input style={{ border:`2px solid ${emailBorderColor}` }}
          type="email"
          value={email}
          onChange={handleEmailChanges}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          required
          />
          <p style={{display: emailWarn}} id='emailwarning'>Email should contain '@' and '.' !!</p>
        <label>Password:</label>
        <input style={{ border:`2px solid ${passwordBorderColor}` }}
          type="password" 
          value={password}
          onChange={handlePasswordChanges}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
          required
        />
          <p style={{display: passWarn}} id='passwordwarning'>Password must me greater then 8 character !!</p>

        <label>Confirm Password:</label>
        <input style={{ border:`2px solid ${cPasswordBorderColor}` }}
          type="password" 
          value={cPassword} 
          onChange={handleCPasswordChanges}
          onFocus={handleCPasswordFocus}
          onBlur={handleCPasswordBlur}
          required
        />
          <p style={{display: cPassWarn}} id='cpasswordwarning'>Password do not match !!</p>

          <p style={{display: submitWarn}} id='submitWarning'>Please fill all the details. !!</p>
        <button type="button" onClick={SubmitForm}>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
