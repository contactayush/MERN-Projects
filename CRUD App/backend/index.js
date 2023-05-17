import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

let app = express();
const CONNECTION_URL =
  'mongodb+srv://prajwalgadhave:Prajwal123@social-media-app.42giswj.mongodb.net/?retryWrites=true&w=majority';

app.use('/', postRoutes);
app.get('/', (req, res) => {
  res.send('Hello There');
});

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen('5000', () => {
      console.log('Connected to database and listening to port 3000');
    });
  })
  .catch((err) => console.log(err));
