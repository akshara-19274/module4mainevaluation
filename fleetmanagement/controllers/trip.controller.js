const supabase=require('../config/supabase');
exports.createTrip=async(req,res)=>{
    const {customer_id,vehicle_id,start_date,end_date,location,distance_km,passengers}=req.body;
    const {data:vehicle}=await supabase
        .from('vehicles')
        .select('*')
        .eq('id',vehicle_id)
        .single();
    if(!vehicle || !vehicle.isAvailable){
        return res.status(400).json({error:'Invalid vehicle ID'});
    }
    if(passengers>vehicle.allowed_passengers){
        return res.status(400).json({error:'Exceeds allowed passengers'});
    }
    const {data,error}=await supabase
        .from('trips')
        .insert([{customer_id,vehicle_id,start_date,end_date,location,distance_km,passengers}]);
    if(error){
        return res.status(500).json({error:'Error creating trip'});
    }
    await supabase
        .from('vehicles')
        .update({isAvailable:false})
        .eq('id',vehicle_id);
    res.status(201).json({message:'Trip created successfully',trip:data[0]});
};
exports.endTrip=async(req,res)=>{
    const{tripId}=req.params;
    const {data:trip}=await supabase
        .from('trips')
        .select('*')
        .eq('id',tripId)
        .single();
    if(!trip){
        return res.status(404).json({error:'Trip not found'});
    }
    const {data:vehicle}=await supabase
        .from('vehicles')
        .select('*')
        .eq('id',trip.vehicle_id)
        .single();
    const tripCost=trip.distance_km*vehicle.rate_per_km;
    await supabase
        .from('trips')
        .update({isCompleted:true,tripCost})
        .eq('id',tripId);
    await supabase
        .from('vehicles')
        .update({isAvailable:true})
        .eq('id',trip.vehicle_id);
    res.status(200).json({message:'Trip ended successfully',tripCost});
};