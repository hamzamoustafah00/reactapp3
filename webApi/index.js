const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/message', (req, res) => {
  res.json({ message: 'hello from king hamzah!' });
});

app.listen(port, () => {
  console.log(`Backend API running at http://localhost:${port}`);
});