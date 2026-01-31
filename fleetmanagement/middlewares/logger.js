const fs=require('fs');
module.exports=(req,res,next)=>{
    const log='${req.method} ${req.url} ${new Date().toISOString()}\n';
    try {
        fs.appendFileSync('log.txt',log);
    } catch (err) {
        console.error('Failed to write log:',err);
    }
    next();
};