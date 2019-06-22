

const parseCookies = (req, res, next) => {
  let cookie = {}
  if(req.headers.cookie !== undefined) {
    
    let cookieSplit = req.headers.cookie.split('; ');
    let cookiesAgain = [];
    

    for(let i = 0; i < cookieSplit.length; i++) {
      cookiesAgain.push(cookieSplit[i].split('='));
      cookie[cookiesAgain[i][0]] = cookiesAgain[i][1]
    }
    req.cookies = cookie
  }
  next();
};

module.exports = parseCookies;

// headers: {
//     Cookie: 'shortlyid=8a864482005bcc8b968f2b18f8f7ea490e577b20'
//   }