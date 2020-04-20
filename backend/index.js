const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello World')
  
})

// Import routes
const authRoute = require('./routes/auth');
const contactRoute = require('./routes/addContact');
const fechContacts = require('./routes/contactList');


// routes middleware
app.use('/api/user',authRoute);
app.use('/api/user',contactRoute);
app.use('/api/user',fechContacts);



app.listen(PORT, ()=> {
  console.log(`Example app listening on port ${PORT}!`);
});