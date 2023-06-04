import React, { useState, useEffect } from 'react';
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    // Set default name for ID = 1
    fetchName(1);
  }, []);

  const fetchName = async (id) => {
    try {
      const response = await fetch(`https://content.newtonschool.co/v1/pr/main/users/${id}`);
      const data = await response.json();

      if (response.ok) {
        setName(data.name);
      } else {
        // Handle error when the ID is out of range
        setName('Invalid ID');
      }
    } catch (error) {
      // Handle network or fetch error
      console.log(error);
    }
  };

  const changeInput = (event) => {
    const inputId = parseInt(event.target.value);

    if (inputId >= 1 && inputId <= 10) {
      fetchName(inputId);
    } else {
      // Handle invalid input
      setName('Invalid ID');
    }
  };

  return (
    <div className="App">
      <h1 id="text">Type a number between 1 and 10</h1>
      <input id="input" onChange={changeInput} />
      <p id="name">{name}</p>
    </div>
  );
};

export default App;
