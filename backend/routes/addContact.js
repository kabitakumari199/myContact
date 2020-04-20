
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Imported contact module
//let contact = require('./addContact.model');

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: '../public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('addContact');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

// Defined store route
router.post('/addContacts', (req, res) => {
 
  console.log(req.body);
  upload(req, res, (err) => {
    console.log(req.body);
    //res.send(req.body);
   //res.send(req.file.filename);
    
    if(err){
      console.log();
      res.send("Error: Images Only!");
    } else {
      if(req.file == undefined){
        res.send('Error: No File Selected!');
      } else {
        res.send(req.file.filename);
      }
    }
  });
  // let post = new Post(req.body);
  // post.save()
  //   .then(post => {
  //     res.status(200).json({'post': 'Image added successfully'});
  //   })
  //   .catch(err => {
  //     res.status(400).send("unable to save to database");
  //   });
});

module.exports = router;
