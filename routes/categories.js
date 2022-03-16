const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async (req, res) => {
    const newCat = new Category(req.body);
    try{
        const saveCategory = await newCat.save();
        res.status(200).json(saveCategory)
    } catch(err){
        res.status(404).json("wrong credentials")
    }
})

router.get("/", async (req, res) => {
    try{
        const cats = await Category.find()
        res.status(200).json(cats)
    } catch(err){
        res.status(500).json("wrong credentials")
    }
})

module.exports = router;