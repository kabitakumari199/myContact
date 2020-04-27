const express = require("express");
const router = express.Router();
const Contacts = require('../model/Contacts');

 //FechContact route
router.post('/fetchContact', async(req, res) => {
      console.log('req.body',req.body);
   // const contacts = await Contacts.findAll({where:{
  //   user_id:req.body.user_id}
  // });
  var page_size = 5 ;
  var page_num = req.body.page_num ? req.body.page_num :1;
  var skips = page_size * (page_num - 1);
  const contacts = await Contacts.findAll({limit: 5, offset:skips});
    res.send(contacts);
});

router.post('/fetchCount', async(req, res) => {
 const contacts = await Contacts.findAll();
   res.send(contacts);
});

router.get('/viewContact/:id', async(req,res)=>{
  const user = await Contacts.findAll({
    where: {
      id: req.params.id
    }
  })
  res.send(user);
});

router.get('/deleteContact/:id', async(req,res)=>{
  const user = await Contacts.findAll({
    where: {
      id: req.params.id
    }
  });
 
  res.send(user);
});




module.exports = router;