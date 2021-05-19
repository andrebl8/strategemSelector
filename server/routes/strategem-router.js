
const express = require('express')

const StrategemCtrl = require('../controllers/strategem-ctrl')

const router = express.Router()

router.post('/strategem', StrategemCtrl.createStrategem)
router.put('/strategem/:id', StrategemCtrl.updateStrategem)
router.delete('/strategem/:id', StrategemCtrl.deleteStrategem)
router.get('/strategem/:id', StrategemCtrl.getStrategemById)
router.get('/allStrategems', StrategemCtrl.getStrategems)
router.get('/allTags', StrategemCtrl.getAllTags)
router.post('/strategemByTags', StrategemCtrl.getStrategemByTag)
 
module.exports = router