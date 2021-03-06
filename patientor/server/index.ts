import express from 'express';
const app = express();
app.use(express.json());

const PORT = 3001;
const cors = require('cors')

app.use(cors())

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});