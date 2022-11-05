const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Built in JSON Middleware
app.use(express.json());

// routes

app.listen(port, () => {
  console.log(`Connected to ${port}`);
});
