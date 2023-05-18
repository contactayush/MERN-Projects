import postModel from '../models/posts.js';

export const getPost = async (req, res) => {
  try {
    const allPosts = await postModel.find({});
    res.status(200).json({
      message: 'Data recieved Successfully',
      AllPosts: allPosts,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (req, res) => {
  try {
    const prajwal = new postModel({
      name: 'Prajwal',
      roll: 21150,
    });
    const data = await prajwal.save();

    res.status(200).json({
      msg: 'Successfully Created',
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const updated_Value = await postModel.findByIdAndDelete(
      '646502e54ace8070a2354d06',
      {
        name: 'Khushi',
        roll: 21138,
      }
    );

    res.status(200).json({
      msg: 'Edited Successfully',
      payload: updated_Value,
    });
  } catch (error) {
    console.log(error);
  }
};

export const handlePostReq = async (req, res) => {
  try {
    let { id } = req.params;
    res.status(200).json({
      msg: 'Success',
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
