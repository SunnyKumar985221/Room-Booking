const express = require("express");
const router = express.Router();
const personuser = require('../Database/models/User.js')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
router.use(cookieParser())

const authentication = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log(verifyToken)
        if (verifyToken.id === req.params.id) {
            if(verifyToken.isadmin == true){
                console.log("ok");
                next();
            }
            
        } else {
            console.log("not found")
        }
    } catch (err) {
        res.status(401).send("unauthrisdzwd person");
        console.log(err);
    }
}


// For Getting all data
router.get('/',  async (req, res) => {
    try {
        const alluser = await personuser.find()
        res.status(200).json(alluser);
        console.log(alluser);
    } catch (error) {
        res.status(500).json(error);
    }
})

// For Getting Particular user
router.get('/:id', async (req, res ) => {
    try {
        const oneuser = await personuser.findById(req.params.id)
        res.status(200).json(oneuser);
    } catch (error) {
        res.status(500).json(error);
    }
})


router.put('/:id', authentication, async (req, res , next) => {
    try {
        const updateuser = await personuser.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateuser);
        console.log("user updated");
    } catch (error) {
        next(error);
    }
})

// For Deleting Particular single Hotl
router.delete('/:id', async (req, res) => {
    try {
        const deleteuser = await personuser.findByIdAndDelete(req.params.id)
        res.status(200).json("user Has been deleted");
        console.log(deleteuser);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;