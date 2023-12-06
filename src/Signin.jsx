import React, { useState } from 'react';

const Signin = () => {
  // valorile din form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const validUsername = 'dana'; 
    const validPassword = 'dana'; 

    if (username === validUsername && password === validPassword) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  return (
    
    <div>
       {loggedIn ? (
        <p>Bine ai venit, {username}</p>
      ) : (
        <p>Nume sau parolă incorecte. Te rugăm să încerci din nou.</p>
      )}
      <h1>Bine ai venit pe pagina Signin</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nume:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Parolă:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

     
    </div>
  );
};

export default Signin;
