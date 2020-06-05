
express = require('express')
   

const app = express();


app.get("/", (req, res) => {
  res.send('Hello World, this is [Honorine] [Mutazinda] with HNGi7 ID [HNG-03899] using [node.js] for stage 2 task. honomuta@gmail.com;');
});

const port = process.env.PORT || 3000;

const listener = app.listen(port, function() {
    console.log('platform listening on', listener.address().port);
});