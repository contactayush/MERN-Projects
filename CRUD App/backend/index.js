import express from 'express';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import cors from 'cors';
import dotenv from 'dotenv';

let app = express();
const CONNECTION_URL =
  'mongodb+srv://prajwalgadhave:Prajwal123@social-media-app.42giswj.mongodb.net/?retryWrites=true&w=majority';

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(cors());
app.use('/', postRoutes);
app.get('/', (req, res) => {
  res.send('Hello There');
});
dotenv.config();

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(process.env.PORT_NO, () => {
      console.log('Connected to database and listening to port 5000');
    });
  })
  .catch((err) => console.log(err));
