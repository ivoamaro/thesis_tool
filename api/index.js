const express = require('express');
const multer = require('multer');


let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, req.body.filename + Date.now() + '.jpg') //Appending .jpg
  }
})

const upload = multer({
  storage: storage
})
const app = new express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));


module.exports = {
  path: '/api',
  handler: app
}

const cpUpload = upload.fields([{
  name: 'file',
  maxCount: 1
}]);

app.post('/foo', cpUpload, function (req, res, next) {
  // req is the Node.js http request object
  // res is the Node.js http response object
  // next is a function to call to invoke the next middleware

  res.send('cenas');
})
