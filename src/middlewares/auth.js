const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({ error: 'No token provided' });
    }

    const parts = authHeader.split(' ');    

    console.log(parts)

    if(!parts.length === 2) {
        return res.status(401).send({errror: 'Token error'})
    }

    const [scheme, token] = parts;

    jwt.verify(token, process.env.HASH_SECRET, (err, decoded) => {
        if(err) {
            return res.status(401).send({errror: 'Token invalid'});
        }
        req.userId = decoded.id;

        return next();
    })
}