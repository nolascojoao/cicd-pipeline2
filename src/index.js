const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Feliz Natal.");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
