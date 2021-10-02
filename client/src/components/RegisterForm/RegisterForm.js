import React, { useEffect, useState, useRef } from 'react';
import '../../styles/RegisterForm.css';
import { withRouter, Link } from 'react-router-dom';
// import useFetch from '../../Hooks/useFetch.js';

function RegisterForm({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hidden, isHidden] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //declared a handler function that will be called when the LOGIN button is clicked
  const handleAdmin = () => {
    history.push('/admin');
  };
  function handleEmailInput(e) {
    setEmail(e.target.value);
  }

  function handlePasswordInput(e) {
    setPassword(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    // Post request example
    fetch('myUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
    setEmail('');
    setPassword('');
  }

  const toggleLogIn = () =>
    isHidden(true) ? IsHidden(false) : IsHidden(!false);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div className="form_container">
          <form
            className={hidden ? 'hidden' : null}
            onFormSubmit={handleFormSubmit}
          >
            <h2>My Account</h2>
            <div className="email_field">
              <input
                id="input-email"
                ref={inputRef}
                type="text"
                required
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleEmailInput}
              ></input>
              <span></span>
              <label htmlFor="input-email"></label>
            </div>
            <div className="password_field">
              <label htmlFor="input-password"></label>
              <input
                id="input-password"
                type="password"
                required
                placeholder="Password"
                name="password"
                value={password}
                onChange={handlePasswordInput}
              ></input>
              <span></span>
            </div>
            <div className="login_button">
              <input
                onClick={handleAdmin}
                type="Submit"
                value="Log In"
                disabled={isLoading}
              />
            </div>
            <div className="register_link">
              Not a member? <a onClick={toggleLogIn}>Sign Up</a>
            </div>
          </form>
          <form
            className={!hidden ? 'hidden' : null}
            onFormSubmit={handleFormSubmit}
          >
            <h2>Create Account</h2>
            <div className="email_field">
              <input
                id="input-email"
                type="text"
                required
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleEmailInput}
              ></input>
              <span></span>
              <label htmlFor="input-email"></label>
            </div>
            <div className="password_field">
              <label htmlFor="input-password"></label>
              <input
                id="input-password"
                type="password"
                required
                placeholder="Password"
                name="password"
                value={password}
                onChange={handlePasswordInput}
              ></input>
              <span></span>
            </div>
            <div className="login_button">
              <input
                type="Submit"
                value="Complete Sign Up"
                disabled={isLoading}
              />
            </div>
            <div className="register_link">
              Already have an account? <Link to="/SignIn">Sign In</Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default withRouter(RegisterForm);
