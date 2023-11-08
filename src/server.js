const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3800; 
app.use(cors({ origin: 'http://localhost:3000' }));

const jsonData = {
  "Nearestpoint": [
    {
      "x": 4,
      "Arr": [
        [4, 5],
        [49, 2],
        [-99, 10],
        [7, 8]
      ]
    }
  ]
};

app.get('/Nearestpoint', (req, res) => {
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
