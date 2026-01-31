const supabase=require('../config/supabase');
exports.signup=async(req,res)=>{
    const {name,email,password,role}=req.body;
    if (!['customer','owner','driver'].includes(role)){
        return res.status(400).json({error:'Invalid role specified'});
    }
    const {data:existing}=await supabase
        .from('users')
        .select('*')
        .eq('email',email);
    if(existing.length>0){
        return res.status(400).json({error:'Email already registered'});
    }
    const {data,error}=await supabase
        .from('users')
        .insert([{name,email,password,role}]);
    if(error){
        return res.status(500).json({error:'Error creating user'});
    }
    res.status(201).json({message:'User created successfully',user:data[0]});
};