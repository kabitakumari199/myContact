var jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    //console.log(req);
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send('Access denied');
    }
    try {
        const verified = jwt.verify(token, 'secretkey');
        req.user = verified;
        next();
    } catch (err) {
        console.log(err);
         res.status(400).send('Invalid token');
    }

}


// function getUser() {
//     // Code here
// }

// function getUsers() {
//     // Code here
// }

// module.exports = {
//     getUser,
//     getUsers
// }