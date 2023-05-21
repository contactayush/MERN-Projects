import mongoose from 'mongoose';

let formSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNo: Number,
});

const formModel = mongoose.model('formModel', formSchema);

export default formModel;
