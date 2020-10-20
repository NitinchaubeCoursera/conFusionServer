const express =require("express");
const bodyParser=require("body-parser");

const promoRouter=express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send the data soon...');
})

.post((req,res,next)=>{
    res.end('will add the promotions:'+req.body.name+"with details: "+req.body.description);
})

.put((req,res,next)=>{
    res.statusCode=403;
    res.end('put operation is not supported on promotions');
})

.delete((req,res,next)=>{
    res.end("deelete all the information");
});



promoRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send the data soon...:'+req.params.promoId +"to you");
})

.post((req,res,next)=>{
    res.statusCode=403;
    res.end('POST operation is not supported on promotionses/'+req.params.promoId);
})

.put((req,res,next)=>{
    res.write('Updating the promotions:'+req.params.promoId+'\n');
    res.end('will update the promotions:'+req.body.name +'with details:'+req.body.description);    
})

.delete((req,res,next)=>{
    res.end("deelete promotions"+req.params.promoId);
});

module.exports=promoRouter;