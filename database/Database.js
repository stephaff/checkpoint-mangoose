require('dotenv').config({ path : './config/.env'})

const mongoose = require('mongoose')

const Connection = () => {
        mongoose.connect(process.env.MONGO_URI)
            .then(() => 
                console.log(`serveur en marche sur le port ${ process.env.PORT }`)
            )
            .catch(error => {
                console.log(error)
            })
    }

module.exports = Connection