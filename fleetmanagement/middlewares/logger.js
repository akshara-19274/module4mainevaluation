const fs=require('fs');
module.exports=(req,res,next)=>{
    const log='${req.method} ${req.url} ${new Date().toISOString()}\n';
    fs.appendFile('logs.txt,log');
    next();
};