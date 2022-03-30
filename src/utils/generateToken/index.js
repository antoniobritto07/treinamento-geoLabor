require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (user_id) => {
    return jwt.sign({ id: user_id }, process.env.HASH_SECRET, {
        expiresIn: 86400
    })
}

module.exports = generateToken;