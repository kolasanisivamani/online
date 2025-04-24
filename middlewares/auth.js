const jwt = require('jsonwebtoken');

const authenticate = () => {
  return (req, res, next) => {

    const strToken = req.headers.authorization?.split(' ')[1];
    let token;
    if (strToken) {
      token = strToken.replace(/"/g, '');
    }
    
    if (!token) return res.status(401).json({ message: 'Unauthorized access' });
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Invalid token' });
      req.user = decoded; // Assuming the token contains the user ID
      next();
    });
  };
};

module.exports = authenticate;
