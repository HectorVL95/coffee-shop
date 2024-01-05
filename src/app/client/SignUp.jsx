"use client"
import {useState} from 'react';
import Link from "next/link";
import '../styles/SignIn.scss'
import '../styles/SignUp.scss'


const SignUp = () => {

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  function handleChange(e){
    setUserData({...userData, [e.target.name]: e.target.value})
  };
  
  const  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log('Request Data:', userData);

      const res = await fetch('http://localhost:5000/addUser', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(userData),
      })

      const data = res.json()

      console.log(data)
    } catch (error) {
      console.error('Error adding user', error);
    }
  }  

  return (
    <main className="SignIn signUp">
      <form onSubmit={handleSubmit} className="signForm" action="Submit">
        <div className="wrapper-text">
          <h1>CREATE ACCOUNT</h1>
          <p>Already have an account? <Link href={'/signIn'}>Log in</Link></p>
        </div>
        <div className="input-wrapper">
          <p>First Name</p>
          <input type="text" name='firstName' value={userData.firstName} onChange={handleChange} required/>

          <p>Last Name</p>
          <input type="text" name='lastName' value={userData.lastName} onChange={handleChange} required/>

          <p>Email Address</p>
          <input type="email" name='email' value={userData.email} onChange={handleChange} required/>

          <p>Password</p>
          <input type="password" name='password' value={userData.password} onChange={handleChange} required/>
        </div>
        <button className='signBtn'>Sign Up</button>
      </form>
    </main>
  );
}

export default SignUp;