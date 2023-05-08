import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new user object
    const newUser = {
      name: name,
      email: email,
      password : password,
      phoneNo: phoneNo
    };


    try {
      // Make a POST request to the API to save the user
      const response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });

      if (response.ok) {
        // If the user was successfully saved, add it to the existing list of users
        const savedUser = await response.json();
        console.log(savedUser)
        setUsers([...users, savedUser]);
      } else {
        console.error('Failed to save user');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    // Clear the input fields after submission
    setName('');
    setEmail('');
    setPassword('');
    setPhoneNo('');
  };



  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

<p>Already have Account <Link to="/login">Login</Link> </p>

      {/* <h2>Users:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default SignUp;
