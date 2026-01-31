const express=require('express');
const router=express.Router();
const {addVehicle,assignVehicle,getVehicles}=require('../controllers/vehicle.controller');
const rateLimit=require('../middlewares/rateLimit');
router.post('/add',rateLimit,addVehicle);
router.patch('/assign-driver/:vehicleId',assignDriver);
router.get('/:vehicleId',getVehicles);
module.exports=router;