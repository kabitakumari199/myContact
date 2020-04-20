const express = require("express");
const router = express.Router();
const Contacts = require('../model/Contacts');

 //FechContact route
router.post('/fetchContact', async(req, res) => {
   // const contacts = await Contacts.findAll({where:{
  //   user_id:req.body.user_id}
  // });
  const contacts = await Contacts.findAll();
    res.send(contacts);
});

router.get('/editContact/:id', async(req,res)=>{
  const user = await Contacts.findAll({
    where: {
      id: req.params.id
    }
  });
  res.send(user);
});




module.exports = router;