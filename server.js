const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'https://trello.com' }));

app.use(express.static('public'));

app.get("*", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});