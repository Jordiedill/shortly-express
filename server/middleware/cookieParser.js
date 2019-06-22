const parseCookies = (req, res, next) => {
  let cookieSplit = req.header.cookies.split(';');
  let cookiesAgain = [];
  let cookie = {}

  for(let i = 0; i < cookieSplit.length; i++) {
    cookiesAgain.push(cookieSplit[i].split('='));
    cookie[cookiesAgain[i][0]] = cookiesAgain[i][1]
  }

  


};

module.exports = parseCookies;

// headers: {
//     Cookie: 'shortlyid=8a864482005bcc8b968f2b18f8f7ea490e577b20'
//   }