const express = require('express');
const PORT = 3000;
const app = express();

//@ Middleware method
const reqTime = function (req, res, next) {
  req.year = 2025;
  req.time = Date.now();
  next();
};

app.use(reqTime);
app.get('/', (req, res) => {
  const text = `<small>${new Date(req.time).toString()} year: ${
    req.year
  }</small>`;
  res.send(text);
});

app.listen(PORT, () => {
  console.log(`server run on port: ${PORT}`);
});
