import React, { useState } from 'react';
import { getPosts, handlePost } from '../api';

const Getposts = () => {
  const [Data, setData] = useState([]);

  const getClickHandler = () => {
    getPosts()
      .then((res) => {
        console.log(res.AllPosts);
        setData(res.AllPosts);
      })
      .catch((err) => console.log(err));
  };

  const postrequesthandler = () => {
    handlePost(Data[0]._id)
    console.log(Data[0]._id);
  };

  return (
    <div className="getposts">
      <button onClick={getClickHandler} className="btn">
        Get Posts List
      </button>
      <button onClick={postrequesthandler} className="btn">
        
        Post
      </button>
    </div>
  );
};

export default Getposts;
