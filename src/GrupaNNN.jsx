import React, { useState } from 'react';

const GrupaNNN = () => {
  const [nume, setNume] = useState('');
  const [prenume, setPrenume] = useState('');
  const [email, setEmail] = useState('');
  const [studenti, setStudenti] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = { nume, prenume, email };
    setStudenti([...studenti, newStudent]);
    setNume('');
    setPrenume('');
    setEmail('');
  };

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nume:
          <input type="text" value={nume} onChange={(e) => setNume(e.target.value)} />
        </label>
        <label>
          Prenume:
          <input type="text" value={prenume} onChange={(e) => setPrenume(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Adauga</button>
      </form>

      <h2>Afisare studenti</h2>
      <table >
        <thead>
          <tr>
            <th>Nume</th>
            <th>Prenume</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {studenti.map((student, index) => (
            <tr key={index}>
              <td>{student.nume}</td>
              <td>{student.prenume}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default GrupaNNN;
