const express = require('express')
const router = express.Router()
const GiftExchange = require("../models/gift-exchange")
const { BadRequestError } = require("../utils/errors")

router.use(express.json())

router.post("/pairs", async (req, res, next) =>{
    try{
        if(!req.body || !req.body.names || Array.isArray(req.body.names) == false || req.body.names.length == 0){
            next(new BadRequestError("No valid request body exists"))
        }
        const pairsRes = GiftExchange.pairs(req.body.names)
        console.log(Array.isArray(pairsRes))
        res.status(200).send(pairsRes)
    }catch(err){
        next(err)
    }
})

router.post("/traditional", async (req, res, next) =>{
    try{
        if(!req.body || !req.body.names || req.body.names.length == 0){
            next(new BadRequestError("No valid request body exists"))
        }
        if(Array.isArray(req.body.names) == false){
            next(new BadRequestError("Names is not a valid array"))
        }
        const traditionalRes = GiftExchange.traditional(req.body.names)
        res.status(200).send(traditionalRes)
    }catch(err){
        next(err)
    }
})

module.exports = router