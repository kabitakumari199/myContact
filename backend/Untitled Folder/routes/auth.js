const express = require("express");
const router = express.Router();
const User = require('../model/Users');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const {registerValidation,loginValidation} = require('../validation');

 //Register route
router.post('/register', async(req, res) => {

  const {error} = registerValidation(req.body);
  if(error){return res.status(400).send(error.details[0].message)}

  // check user is already in the databse
  const emailExit = await User.findOne({where:{email:req.body.email}});
  if(emailExit){ return res.send({error:"Email already exits"})};

  // check username is already in the databse
  const username = await User.findOne({where:{username:req.body.username}});
  if(username){ return res.send({error:"Username already exits"})};

  // check contact_no is already in the databse
  const contact_no = await User.findOne({where:{contact_no:req.body.contact_no}});
  if(contact_no){ return res.send({error:'Contact number already exits'})}

  //Hash the password here
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password,salt);


  // created new user 
	const user = await new User({
		first_name:req.body.first_name,
		username:req.body.username,
		email:req.body.email,
		password:hashedPassword,
		contact_no:req.body.contact_no,
		status:0
	});
	try {
    // saved new user to db
		const saveUser = await user.save();
		if (saveUser) {
			res.send({message:saveUser});
			//res.send({user:user._id})
		}
	} catch (err) {
		res.send(err);
	}
	res.send('register');
});

// Login route 
router.post('/login', async(req, res) => {
	const {error} = loginValidation(req.body);
	if(error){return res.send({error:error.details[0].message})}

	// Checking if the username exits
	const user = await User.findOne({where:{username:req.body.username}});
		if(!user){ return res.send({error:"username or password is wrong"});}

	// Checking password is correct
	const validPass = await bcrypt.compare(req.body.password,user.password);
	if(!validPass){return res.send({error:"Invalid password"})};

	//Create and assign a token
	//const token = jwt.sign({user:user},'secretkey');
	const token = jwt.sign({_id:user._id},'secretkey');  
	//res.send(token);
	const userinfo = "";
	res.header('auth-token',token).send({token:token,userinfo:user});
	//res.send({user:user});
});

module.exports = router;