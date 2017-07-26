'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 2007;

app.use(express.static('.'));

app.listen(PORT, function() {
  console.log('Started Node.js server on port ' + PORT);
});
