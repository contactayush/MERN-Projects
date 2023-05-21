import React, {  useState } from 'react';
import { createPost } from '../api';

const Form = () => {
  const [Data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(Data);
  };

  const handleChange = (e) => {
    setData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="name"
        name="name"
      />
      <input
        onChange={(e) => handleChange(e)}
        type="email"
        placeholder="email"
        name="email"
      />
      <input
        onChange={(e) => handleChange(e)}
        type="number"
        placeholder="phoneNo"
        name="phoneNo"
      />
      <button type="submit">Submit Details</button>
    </form>
  );
};

export default Form;
