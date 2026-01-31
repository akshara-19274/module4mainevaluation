const supabase=require('../config/supabase');
exports.getAnalytics=async(req,res)=>{
    const {count:userCount}=await supabase
        .from('users')
        .select('*',{count:'exact',head:true});
    const {count:vehicleCount}=await supabase
        .from('vehicles')
        .select('*',{count:'exact',head:true});
    const {count:tripCount}=await supabase
        .from('trips')
        .select('*',{count:'exact',head:true});
    res.json({
        total_users:userCount,
        total_vehicles:vehicleCount,
        total_trips:tripCount
    });
};