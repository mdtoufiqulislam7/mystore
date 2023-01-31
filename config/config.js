require("dotenv").config();



const dev= {

   app: {
    port: process.env.port || 4000
   },
   db: {
    url: process.env.DB_url || "mongodb://localhost:27017/hidedata"
   }


}

module.exports = dev;