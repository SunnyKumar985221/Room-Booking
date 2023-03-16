const express = require("express");
const personuser = require('../Database/models/User.js')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const multer = require("multer");
const path = require("path")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

router.post('/register', upload.single("image"), async (req, res) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    try {
        const newpersonUser = new personuser({
            username: req.body.username,
            email: req.body.email,
            country: req.body.country,
            city: req.body.city,
            phone: req.body.phone,
            password: hash,
            img: req.file?.filename || "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        })
        await newpersonUser.save();
        res.status(201).send("Successfully User created");
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get('/login', async (req, res) => {
    try {
        const user = await personuser.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).json({ error: "No user found with this name" });
        }
        const ispassowrdcorrect = await bcrypt.compare(req.body.password, user.password)

        if (!ispassowrdcorrect) {
            return res.status(400).json({ error: "PassWord Not correct" });
        }

        const token = jwt.sign({ id: user._id, isadmin: user.isAdmin }, process.env.SECRET_KEY)
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(201).json("success");
        console.log("Login Success");

    } catch (err) {
        next(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await personuser.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ error: "fill data" });
        }

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect)
            return res.status(400).json({ error: "PassWord Not correct" });
        // console.log(user._doc);
        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY
        );
        // console.log("succes")
        // return res.status(200).json(user._doc );
        const { password, isAdmin, ...otherDetails } = user._doc;
        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({ details: { ...otherDetails }, isAdmin });
        // console.log(user._doc)
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;