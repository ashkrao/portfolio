'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 2007;
exports.GITHUB_TOKEN = process.env.GITHUB_TOKEN;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('.'));

function proxyGitHub(request, response) {
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${GITHUB_TOKEN}`}
  }))(request, response);
}
app.get('/repos', proxyGitHub);

app.listen(PORT, function() {
  console.log('Started Node.js server on port ' + PORT);
});

//Reference:Demo class-13
