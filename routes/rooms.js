const express = require("express");
const router = express.Router();
const Room = require('../Database/models/Rooms.js')
const Hotel = require('../Database/models/Hotels.js')


router.post('/:hotelid', async (req, res) => {

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id },
            })
        } catch (e) { console.log(e) }
        res.status(200).json(savedRoom);
        console.log(savedRoom);
    } catch (error) {
        res.status(500).json(error);
    }
})
router.put('/:id', async (req, res) => {
    try {

        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedRoom);
        console.log(updatedRoom);
    } catch (error) {
        res.status(500).json(error);
    }
})

// For Deleting Particular single Hotl
router.delete('/:id/:hotelid', async (req, res) => {
    const hotelId = req.params.hotelid;
    try {
        const deleteRoom = await    Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id },
            })
        } catch (e) { console.log(e) }
        res.status(200).json(savedRoom);
        console.log(savedRoom);
    } catch (error) {
        res.status(500).json(error);
    }
})

// For Getting Particular data
router.get('/:id', async (req, res) => {
    try {
        const oneroom = await Room.findById(req.params.id)
        res.status(200).json(oneroom);
        console.log(oneroom);
    } catch (error) {
        res.status(500).json(error);
    }
})

// For Getting all data
router.get('/', async (req, res) => {
    try {
        const allroom = await Room.find()
        res.status(200).json(allroom);
        console.log(allroom);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;