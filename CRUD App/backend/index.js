import express from 'express';
import mongoose from 'mongoose';

let app = express();
const CONNECTION_URL =
  'mongodb+srv://prajwalgadhave:Prajwal123@social-media-app.42giswj.mongodb.net/?retryWrites=true&w=majority';

app.get('/', (req, res) => {
  res.send('Hello There');
});

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen('3000', () => {
      console.log('Connected to database and listening to port 3000');
    });
  })
  .catch((err) => console.log(err));

const MsgSchema = new mongoose.Schema({
  name: String,
  roll: Number,
});

const MsgModel = mongoose.model('MsgModel', MsgSchema);

const prajwal = new MsgModel({
  name: 'Prajwal',
  roll: 21150,
});

// prajwal.save();
