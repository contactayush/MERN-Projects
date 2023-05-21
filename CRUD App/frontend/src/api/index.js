import axios from 'axios';

let url = 'http://127.0.0.1:5000';

export const getPosts = async () => {
  try {
    let { data } = await axios.get(`${url}/new`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const handlePost = async (id) => {
  try {
    let { data } = await axios.post(`${url}/new/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (postDetails) => {
  try {
    let { data } = await axios.post(`${url}/createPost`, postDetails);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
