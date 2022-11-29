const CryptoJs = require("crypto-js")
const jwt = require("jsonwebtoken")

const cryptedToPassword = (password) => {
    return CryptoJs.HmacSHA256(password, CryptoJs.HmacSHA1(password, process.env.CRCYPTED_KEY).toString()).toString()
}

const createToken = (user) => {
    return jwt.sign({name: user.username ,...user}, process.env.ACCESS_KEY, { expiresIn: "1d" })
}
const refreshToken = (user) => {
    return jwt.sign({name: user.username ,...user}, process.env.REFRESH_KEY)
}

module.exports = {
    cryptedToPassword,
    createToken,
    refreshToken
}