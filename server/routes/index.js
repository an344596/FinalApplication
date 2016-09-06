var express = require('express');
var router = express.Router();
var Email = require('../models/email');



router.post('/saveBut',function(req, res, next){
    console.log(req.body);
    if(req.body){
        var mymsg = new Email();
         mymsg.wave = req.body.wave;
         mymsg.name=  req.body.name;
         mymsg.email=  req.body.email;
         mymsg.phone=  req.body.phone;
         mymsg.url= req.body.url;
         mymsg.empcode=  req.body.empcode;
         mymsg.empDep=  req.body.empDep;
         mymsg.empDesig=  req.body.empDesig;
         mymsg.skills=  req.body.skills;
         mymsg.exp=  req.body.exp;
         mymsg.save(function(err, mymsg){
             if(err){
                 return console.error(err);
             }
             else{
                 res.send({mymsg: "Data saved successfully"});
             }
         })
}
else{
 console.log("Data not found");
}
});

//.........................Getting .....................

router.get('showGet', function(req,res,next){
    Email.find(function(err, docs){
        if(docs){
            res.json(docs);
        }
        else{
            console.log(err);
        }
    })
});

module.exports = router;
