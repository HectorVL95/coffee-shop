import '../styles/Account.scss'
import Contact from '../client/Contact.jsx'

const Account = () => {

  return (
    <main className="Account">
      <div className="name-wrapper">
        <p>Hi Hector Valenzuela (<u>logout</u>)</p>
        <h1>Your Account</h1>
      </div>
      <div className='orders-buttons'>
        <div className="orders-wrap">
          <h2>Your Orders</h2>
          <p className='orders-title'>Orders you place will appear here</p>
        </div>
        <div className="address-contact-wrap">
          <button>Manage Saved Ship Addresses</button>
          <button>Contact Us</button>
        </div>
      </div>
      <Contact/>
    </main>
  );
}

export default Account;