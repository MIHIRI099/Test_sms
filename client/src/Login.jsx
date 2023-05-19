/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState} from 'react';
import axios from 'axios'

function Login() {
  
  const[email, setEmail]= useState('');
  const[password, setPassword]= useState('');

/*Two event handler functions, handleEmailChange and handlePasswordChange, 
are defined to update the state variables email and password, respectively, 
whenever the input values change. These functions are triggered by the onChange 
event on the input fields.*/

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  /* The handleSubmit function is defined to handle the form submission.
   It prevents the default form submission behavior using e.preventDefault() to avoid 
   page refresh. */

  const handleSubmit = (e) => {
    //This prevents the page from refreshing when the form is submitted.
    e.preventDefault(); 
    /*console.log statements are used to log the values of the username and password variables to the console.
    console.log('Email:', email);
    console.log('Password:', password);*/
    const credentials = {
        email: email,
        password: password,
      };
  
      // Send a POST request to the server
      axios.post('/api/login', credentials)
        .then((response) => {
          // Handle the response from the server
          console.log(response.data); // Assuming the server sends back a response with data
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error(error);
        });

  };



  return (
    <div className="container">
      <h1>Login Page</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" placeholder="Enter your email" value={email}
          onChange={handleEmailChange}
          required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" value={password}
          onChange={handlePasswordChange}required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
