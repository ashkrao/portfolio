'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 2007;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '7c7fd4c789c8df2cf7827d5eceeee844b03222f6';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('.'));

app.get('/github/*', function (request, response) {
  (
    requestProxy({
      url: `https://api.github.com/${request.params[0]}`,
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })
  )(request, response);
})

app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: './'});
});

app.listen(PORT, function() {
  console.log('Started Node.js server on port ' + PORT);
});

//Reference:Demo class-13
