const express = require("express");
const router = express.Router();
const Hotel = require('../Database/models/Hotels.js')

// For Getting all data
router.get('/', async (req, res) => {
    const { min, max, ...others } = req.query;
    try {
        // const allhotel = await Hotel.find(req.query).limit(req.query.limit)
        const allhotel = await Hotel.find({ ...others, cheapestprice: { $gt: min | 1, $lt: max | 999 } }).limit(req.query.limit)
        res.status(200).json(allhotel);
        console.log(allhotel);
    } catch (error) {
        res.status(500).json(error);
    }
});

// For Hotels by cityies name
router.get('/countByCity', async (req, res) => {
    const cities = req.query.cities.split(",");
    // since we have to find the document according to all cities so we have to use Promise.all();
    try {
        const list = await Promise.all(cities.map( (items) => {
            return (
                Hotel.countDocuments({ city: items })
            )
        }
        ))
        res.status(200).json(list);
        console.log("Here is the list");
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newHotel = new Hotel(req.body);
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
        console.log('New Hotel is saved');
    } catch (error) {
        next(error);
    }
})
router.put('/:id', async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel);
        console.log(saveHotel);
    } catch (error) {
        next(error);
    }
})

// For Deleting Particular single Hotl
router.delete('/:id', async (req, res) => {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel Has been deleted");
        console.log(saveHotel);
    } catch (error) {
        res.status(500).json(error);
    }
})

// For Getting Particular data
router.get('/find/:id', async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);
        console.log(hotel);
    } catch (error) {
        res.status(500).json(error);
    }
})




router.get('/countByType', async (req, res) => {
    try {
        const hotelcount = await Hotel.countDocuments({ type: "hotel" });
        const appartmentcount = await Hotel.countDocuments({ type: "appartment" });
        const lodgecount = await Hotel.countDocuments({ type: "lodge" });
        const villacount = await Hotel.countDocuments({ type: "villa" });
        res.status(200).json([
            { type: "hotel", count: hotelcount },
            { type: "appartment", count: appartmentcount },
            { type: "lodge", count: lodgecount },
            { type: "villa", count: villacount }
        ]);
        console.log(hotelcount);
    } catch (error) {
        res.status(500).json(error);
    }
});
module.exports = router;