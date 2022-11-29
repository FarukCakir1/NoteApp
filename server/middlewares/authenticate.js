const httpstatus = require("http-status")
const jwt = require("jsonwebtoken")


const authenticateToken = (req, res, next) => {
    const header = req.headers["authorization"]
    const token = header && header.split(" ")[1];
    if(!token){
        return res.status(httpstatus.UNAUTHORIZED).send({message: "Giriş Yapılmamış"})
    }

    
    jwt.verify(token, process.env.ACCESS_KEY, (err, user) => {
        if(err) return res.status(httpstatus.FORBIDDEN).send({message: "Oturum Süresi Doldu..."})

        req.user = user._doc

        next();
    })
}

module.exports = authenticateToken