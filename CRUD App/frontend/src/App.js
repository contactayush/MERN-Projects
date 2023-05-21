import React from 'react';
import './App.css';
import Getposts from './components/getposts';
import Form from './components/form';

const App = () => {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Getposts />
      <Form />
    </div>
  );
};

export default App;
