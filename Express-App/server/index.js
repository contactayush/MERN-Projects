import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.post('/services', (req, res) => {
  let { inp1, inp2 } = req.body;
  res.status(200).json({
    inp1: inp1,
    inp2: inp2,
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/calculate.html');
});

app.listen(3000, () => {
  console.log('Listening to port 3000');
});
