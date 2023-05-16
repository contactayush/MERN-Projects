import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  name: {
    type: String,
    default: 'Prajwal',
  },
  roll: Number,
});

const postModel = mongoose.model('postModel', postSchema);

export default postModel;
