const path = require("path");
const user = require("../models/user.model")


const getinformation = ((req,res)=>{
      res.sendFile(path.join(__dirname+ "/../viwes/index.html"))
})

const gettow= ((req,res)=>{
    res.send("hello")
})

const readinformation = async(req,res)=>{
    try {
        const newdata =new user({
            Gmail: req.body.Gmail,
            password: Number(req.body.password)
        })
        await newdata.save();
        res.status(200).send("thanks for sending");
    } catch (error) {
        res.status(502).send(error.message)
    }

}


module.exports = {
    getinformation, gettow,readinformation
}