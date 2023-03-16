const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');
app.use(express.json());  // you cannot parse the json data directly to the express server. 
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
const dotenv = require("dotenv");
dotenv.config({ path: './configfile.env' });
require('./Database/conn');
const PORT = process.env.PORT || 8000;
const cookieParser = require('cookie-parser');
// app.use(express.static(__dirname + './upload'/));
app.use("/uploads",express.static('./uploads'));
app.use(cookieParser());
app.use('/auth', require('./routes/auth.js'));
app.use('/rooms', require('./routes/rooms.js'));
app.use('/users', require('./routes/user.js'));
app.use('/hotels', require('./routes/hotels.js'));


// error handling middleware 
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
});



app.use(express.static(path.join(__dirname, "./front/build")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "front/build/index.html"));
});


app.listen(process.env.PORT, () => {
    console.log(`Connected to port no. ${PORT}`)
})