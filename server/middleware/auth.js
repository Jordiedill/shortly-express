const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
    if (req.headers.cookie === undefined) {    
        let sessionHash = ''
        models.Sessions.create((data) => sessionHash = data)
            .then(console.log('sessionHash is: ' + sessionHash))
    }
 next()
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

//create() {
//     let data = utils.createRandom32String();
//     let hash = utils.createHash(data);
//     return super.create.call(this, { hash });
//   }

module.exports.authenticate = (req, res, next) => {
    let username = {
        "username": req.body.username
      }  
    let attempted = req.body.password
    let hashed = ''
    let salt = ''
    let userid;
    console.log('username object is ' + JSON.stringify(username))
    models.Users.get(username)
    .then((resolve, reject) => {
        if(reject) {
         console.log(reject)
        res.redirect('/login')
        } else {
        hashed = resolve.password
        salt = resolve.salt
        userid = resolve.id

        let authentic = models.Users.compare(attempted, hashed, salt)
        console.log('Are they authentic: ', authentic)
        if(authentic === true) {
            console.log('TRUUUUUUUUUUUE')
            // models.Sessions.create();
            res.redirect('/')
        } else {
            res.redirect('/login')
        }
        }
    })
    .catch(error => {
        // console.log('error is: ', error)
        res.redirect('/login')
    })
}