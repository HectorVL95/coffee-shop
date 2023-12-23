import Link from "next/link";
import '../styles/SignIn.scss'
import '../styles/SignUp.scss'


const SignUp = () => {
  return (
    <main className="SignIn signUp">
      <form className="signForm" action="Submit">
        <div className="wrapper-text">
          <h1>CREATE ACCOUNT</h1>
          <p>Already have an account? <Link href={'/signIn'}>Log in</Link></p>
        </div>
        <div className="input-wrapper">
          <p>First Name</p>
          <input type="text" required/>

          <p>Last Name</p>
          <input type="text" required/>

          <p>Email Address</p>
          <input type="email" required/>

          <p>Password</p>
          <input type="password" required/>
        </div>
        <button className='signBtn'>Sign Up</button>
      </form>
    </main>
  );
}

export default SignUp;