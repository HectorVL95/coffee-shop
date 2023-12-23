import Link from 'next/link';
import '../styles/SignIn.scss'


const SignIn = () => {
  return (
    <main className='SignIn'>
      <form className='signForm' action="Submit">
        <div className='wrapper-text'>
          <h1>Sign In</h1>
          <p>Sign in to you Coffee Shop Webstore Account</p>
        </div>
        <div className='input-wrapper'>
          <p>Email Address</p>
          <input type="email" required/>

          <p>Password</p>
          <input type="password" required/>
        </div>
        <button className='signBtn'>Sign In</button>
        <div className='pswd-opt'>
          <p ><Link href={'/resetPswd'}>Forgot you password ?</Link></p>
          <p>Don't have an account ?</p>
          <p><Link href={'/signUp'}>Sign Up</Link></p>
        </div>
      </form>
    </main>
  );
}

export default SignIn;