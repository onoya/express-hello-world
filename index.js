const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) =>
  res.send(`<div>Hello World!</div><b>Hostname:</b> ${os.hostname()}<br/>`)
);

app.listen(80, () => console.log('App listening on port 80!'));
