const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Cheers! God bless you more in 2025!");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});