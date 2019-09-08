/**
|--------------------------------------------------
| Learning Express Challenge 1
| 2019 Dana Simmons
|--------------------------------------------------
*/

const express = require('express');
const app = express();

app.use('/users', ( req, res, next) =>{
  console.log(req.url);
  res.send("<ol><li>Bob</li><li>Jane</li><li>Jim</li></ol>");
})

app.use('/', ( req, res, next ) => {
  console.log(req.url);
  res.send("<h1>Welcome</h1>");
});

app.listen('3000');