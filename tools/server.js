const express = require('express');
const app = express();
const fallback = require('express-history-api-fallback');
const path = require('path');
const publicPath = path.join(__dirname, '..', 'build');

const port = process.env.PORT || 3000;

// use the express-static middleware
app.use(express.static(publicPath));
app.use(fallback('/index.html', { root: publicPath }));

// define the first route
app.get('/', function (req, res) {
  res.sendFile('/index.html', { root: publicPath });
});

// start the server listening for requests
app.listen(port, () => console.log(`Server is running on ${port}`));
