import '../styles/SignIn.scss'
import Link from 'next/link';

const ResetPswd = () => {
  return (
    <main className='SignIn'>
      <form className="signForm" action="Submit">
        <div className='wrapper-text'>
          <h1>Reset Password</h1>
          <p>Submit your email and we will send you a link to reset your password</p>
        </div>
        <div className='input-wrapper'>
          <p>Email Address</p>
          <input type="email" required/>
        </div>
        <div className='sub-cancel-wrapp'>
          <button className='signBtn'>Submit</button>
          <p className='cancel-txt'>or <Link href={'/signIn'}>Cancel</Link></p>
        </div>
      </form>
    </main>
  );
}

export default ResetPswd;