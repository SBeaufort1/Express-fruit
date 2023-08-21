const express = require('express');

const app = express();

//array of plants
const plants = ['Monstera Deliciosa','Corspe Flower','Tulips','Japanese Lilly', 'Venus Fly trap'];

//define routes
app.get('/:indexofplantsArray', (req, res) => {
  res.send(plants[req.params.indexofplantsArray])
});



  app.listen(3000, () => {
    console.log('Listening on port 3000')
  });