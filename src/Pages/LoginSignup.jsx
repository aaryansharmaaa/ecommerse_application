import React from 'react'
import './Css/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter your name...' />
          <input type="email" placeholder='Enter your email...' />
          <input type="password" placeholder='Enter your password...' />
          <button>Continue</button>
        </div>
        <p className="loginsignup-login">Already have an account ? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing ,i agreed to the privacy and policies</p>
        </div>
      </div>
    </div>
  )
}
export default LoginSignup
