import './App.css';
import React, { useState} from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
const App: React.FC = () => {

  const SignUpForm: React.FC = () => {
  
    
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      agreeToTerms: false,
    });
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Führen Sie hier die Logik für die Formularübermittlung aus
      console.log(formData);
    };
    
    return (
        <div>
          <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="name">  <FaUser /> Name</label>
            <input
              placeholder='enter your name'
  
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            
            <label htmlFor="email"><FaEnvelope /> E-mail</label>
            <input
              placeholder='enter your e-mail'
  
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"><FaLock /> Password</label>
            <input
              placeholder='enter your password'
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-groupp">
            <input
              
              type="checkbox"
              id="terms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="terms">I have read and agree to Terms & Conditions</label>
          </div>
          <div className="form-group">
            <button type="submit">CREATE ACCOUNT</button>
          </div>
          <div className="sign-in-link">
            Already have an account? <span className='myspan' onClick={()=>setIsNot(false)}>Sign in</span>
          </div>
        </form>
      </div>
      </div>
      );
  };
  
  const SigninForm: React.FC = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      agreeToTerms: false,
    });
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = e.target;
      const val = type === 'checkbox' ? checked : value;
      setFormData((prevData) => ({
        ...prevData,
        [name]: val,
      }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Add your form submission logic here
      console.log('Form Data:', formData);
    };
  
    return (
      <>
        <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Sign In</h2>
          <div className="form-group">
            <label htmlFor="email">
              <FaEnvelope /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FaLock /> Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Sign In
          </button>
          <p className="sign-up-link">
            Don't have an account? <span className='myspan' onClick={()=>setIsNot(true)} >Sign up</span>
          </p>
        </form>
      </div>
      </>
    );
  };

  const [is, setIsNot] = useState(false);
  const element = is ? <SignUpForm /> : <SigninForm />;

 

  return (
    <div>
      {element}
    </div>
  );
}
export default App;
