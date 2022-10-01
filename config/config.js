const mongoose = require('mongoose');
require('colors')
require("dotenv").config();

const connectDB = async ()=> {
    try {
        const url = process.env.MONGO_URL;
        await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(()=>console.log("CONNECTION ESTABLISHED"));
        // console.log(`Mongodb Database connected ${conn.connection.host}`.bgCyan.white);
    } catch (error) {
        console.log(`error : ${error.message}`.bgRed.white);
        }
};

module.exports = connectDB;

// var mongoDB = process.env.MONGODB_URI;
// mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("CONNECTION ESTABLISHED"));