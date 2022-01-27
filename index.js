const express = require('express');
const path = require('path');
const app = express();
 
app.use(express.static(path.join(__dirname, 'dist')));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, "dist", '/index.html'), function(err) {
     if (err) {
      res.status(500).send(err)
     }
   })
})

console.log(`Server started at port 3011`)

app.listen(3011);
