const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const propID = require('./routes/langDAO');
// Built in JSON Middleware
app.use(express.json());

// routes
app.post('/proposalId', propID);

app.listen(port, () => {
  console.log(`Connected to ${port}`);
});
