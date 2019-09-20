const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({
    items: [
      {id: 1, title: 'Down Jacket', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 110, img: './public/images/bolo-tie.jpg'},
      {id: 2, title: 'Sneakers', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 80, img: './public/images/chukkas.jpeg'},
      {id: 3, title: 'chukkas', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 120, img: './public/images/hat.png'},
      {id: 4, title: 'Pants', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 260, img: './public/images/jacket.jpg"'},
      {id: 5, title: 'Shirt', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 160, img: './public/images/tshirt.jpg'},
      {id: 6, title: 'Hat', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.', price: 90, img: './public/images/knob-creek-rye.png'}
    ],
    addedItems:[],
    total: 0 })
});
