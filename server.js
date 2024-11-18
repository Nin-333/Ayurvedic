const express = require('express');
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Redirect requests without extensions to .html files
app.use((req, res, next) => {
  if (!req.path.includes('.')) {
    req.url = req.url + '.html';
  }
  next();
});

app.listen(5500, () => console.log('Server running on http://127.0.0.1:5500'));
