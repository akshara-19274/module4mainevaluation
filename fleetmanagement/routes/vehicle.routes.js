const express=require('express');
const router=express.Router();
const {addVehicle,assignDriver,getVehicles}=require('../controllers/vehicle.controller');
const rateLimit=require('../middlewares/rateLimiter');
router.post('/add',rateLimit,addVehicle);
router.patch('/assign-driver/:vehicleId',assignDriver);
router.get('/:vehicleId',getVehicles);
module.exports=router;