var lib = require("synaptic");

var network = new lib.Architect.Perceptron(11,11,3);

var f='utc.log',
    fs=require('fs');



var lrate=300;


    var value1=Date.UTC(2017,10);
    var value2 = 10;
    var value3 = 50;
    var value4 = 90;
    var value5 = 1;
    var value6 = 10;
    var value7 = 110;
    var value8 = 101;
    var value9 = 111;
    var value10 = 1000;
    var value11 = 1001;
    var val_ = [value1,value2,value3,value4,value5,value6,value7,value8,value9,value10,value11];
   
function Iteration(){
     network.activate(val_);
    network.propagate(.559,[10,50,90,70,23,56,86,10*process.memoryUsage().heapUsed,9,11,10]);
    var actx = network.activate(val_);
    //console.log(actx);
    if(network.activate(val_)[1] >= 1.000000000000){
        network.propagate([3000],[3000],[3000],[3000],[3000],[3000],[3000],[3000],[3000],[3000],[3000]);
    }

    var bactx = Math.floor(actx[2]);
    

    
}
var towrite = "";
for(let i = 0; i <100000; i++){
     network.activate(val_);
    network.propagate(.159,[1,2,3,4]);
    var actx = network.activate(val_);
    //console.log(actx);
    if(network.activate(val_)[1] >= 1.000000000000){
        network.optimize();
    }

    var bactx = Math.floor(actx[2]);
    var bactx1 = Math.floor(actx[0]);
    var bactx2= Math.floor(actx[1]);
    
    towrite+=bactx.toString();
    towrite+=bactx2.toString();
    towrite+=bactx1.toString();
}

fs.appendFile(f,towrite,function(err){
        if(err)
            console.log(err);
        console.log('Appended!');
    });
