const express =require("express");
const bodyParser=require("body-parser");

const leaderRouter=express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send the data soon...');
})

.post((req,res,next)=>{
    res.end('will add the leaders :'+req.body.name+"with details: "+req.body.description);
})

.put((req,res,next)=>{
    res.statusCode=403;
    res.end('put operation is not supported on leaders');
})

.delete((req,res,next)=>{
    res.end("deelete all the information");
});



leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send the data soon...:'+req.params.leaderId +"to you");
})

.post((req,res,next)=>{
    res.statusCode=403;
    res.end('POST operation is not supported on leader/'+req.params.leaderId);
})

.put((req,res,next)=>{
    res.write('Updating the leaders:'+req.params.leaderId+'\n');
    res.end('will update the leaders:'+req.body.name +'with details:'+req.body.description);    
})

.delete((req,res,next)=>{
    res.end("deelete leaders"+req.params.leaderId);
});

module.exports=leaderRouter;