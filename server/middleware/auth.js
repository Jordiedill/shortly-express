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