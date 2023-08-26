import  { useState } from "react";
import {useNavigate} from 'react-router-dom'

const RightSec = () => {
  const navigate=useNavigate()
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    isChecked: false,
  });

  const [err, setError] = useState({
    nameError: "",
    usernameError: "",
    emailError: "",
    mobileError: "",
    isCheckedError: "",
  });

  const checkError = () => {
    const errObj = {
      nameError: "",
      usernameError: "",
      emailError: "",
      mobileError: "",
      isCheckedError: "",
    };

    const { name, email, username, mobile, isChecked } = data;

    if (name.length === 0) {
      errObj.nameError = "Field is required !!";
    }
    if (username.length === 0) {
      errObj.usernameError = "Field is required !!";
    }
    if (email.length === 0) {
      errObj.emailError = "Field is required !!";
    }
    if (mobile.length === 0) {
      errObj.mobileError = "Field is required !!";
    }
    if(mobile.length > 10){
      errObj.mobileError = "Mobile number should be less than 10 digit";
    }
    if (!isChecked) {
      errObj.isCheckedError = "check the box if you want to proceed";
    }

    setError(errObj);
    
    if(errObj.nameError || errObj.isCheckedError || errObj.usernameError || errObj.mobileError || errObj.emailError){
      return true;
    }
    return false;
    
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!checkError()){
      localStorage.setItem('user',JSON.stringify(data));
      return navigate('/home')
    }
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setData({ ...data, isChecked: checked });
      return;
    }
    setData({ ...data, [name]: value });
  };

  return (
    <div className="right-section">
      <div className="right-container">
        <div>
          <p className="heading">Super App</p>
          <p className="heading-helper">Create your new account</p>
        </div>
        <form onSubmit={handleSubmit} action="">
          <input
            name="name"
            value={data.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            className="common-input-css"
          />
          <br />
          <span className="err">{err.nameError}</span>
          <input
            name="username"
            type="text"
            value={data.username}
            onChange={handleChange}
            placeholder="Username"
            className="common-input-css"
          />
          <br />
          <span className="err">{err.usernameError}</span>
          <input
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"
            className="common-input-css"
          />
          <br />
          <span className="err">{err.emailError}</span>
          <input
            type="tel"
            name="mobile"
            value={data.mobile}
            onChange={handleChange}
            placeholder="Mobile"
            className="common-input-css"
          />
          <span className="err">{err.mobileError}</span>
          <label className="checkbox" htmlFor="checkbox">
            <input
              name="isChecked"
              type="checkbox"
              checked={data.isChecked}
              onChange={handleChange}
            />
            Share my registration data with Superapp
          </label>
          <span className="err">{err.isCheckedError}</span>
          <button>SIGN UP</button>
        </form>
        <div className="helper-text">
          <p>
            By clicking on Sign up. you agree to Superapp{" "}
            <span className="text-span">Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <span className="text-span">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSec;