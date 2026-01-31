const supabase=require('../config/supabase');
exports.addVehicle=async(req,res)=>{
    const{name,registration_number,allowed_passengers,rate_per_km,owner_id}=req.body;
    const {data,error}=await supabase
        .from('vehicles')
        .insert([{name,registration_number,allowed_passengers,rate_per_km,owner_id}]);
    if(error){
        return res.status(500).json({error:'Error adding vehicle'});
    }
    res.status(201).json({message:'Vehicle added successfully',vehicle:data[0]});
};
exports.assignDriver=async(req,res)=>{
    const{vehicleId}=req.params;
    const{driver_id}=req.body;
    const {data,error}=await supabase
        .from('vehicles')
        .update({driver_id})
        .eq('id',vehicleId);
    if(error){
        return res.status(500).json({error:'Error assigning driver'});
    }
    res.status(200).json({message:'Driver assigned successfully',vehicle:data[0]});
};
exports.getVehicles=async(req,res)=>{
    const{vehicleId}=req.params;
    const {data,error}=await supabase  
        .from('vehicles')
        .select('*')
        .eq('id',vehicleId);
    if(error){
        return res.status(500).json({error:'Error fetching vehicle details'});
    }
    res.json(data[0]);
};