///////////////////////////// WARNING ///////////////////////////// 
// DO NOT CONNECT THIS BOT TO (ANY) INTERNET CONNECTION UNLESS YOU HAVE STABILISHED THE LAWS OF ROBOTICS IN

var fs = require("fs");
var data = "";

    fs.readFile(`./logged_messages.log`, (e,d) => {
        if (e){
            throw e;
        }
        data = d;
});


var synaptic = require("synaptic");
var network = new synaptic.Architect.LSTM(2000,1000,100);

function toBytes(str_){
    var str = str_;
    var bytes = [];
    var charCode;

    for (var i = 0; i < str.length; ++i)
    {
        charCode = str.charCodeAt(i);
        bytes.push((charCode & 0xFF00) >> 8);
        bytes.push(charCode & 0xFF);
    }

    return bytes;
}

function bin2String(array) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result += String.fromCharCode(parseInt(array[i], 2));
  }
  return result;
}

function getTPair(){
    
    

    var splitted = data.split("[|||]");

    var x1 = splitted[Math.floor((Math.random()*splitted.length)-1)];
    var x2 = splitted[Math.floor((Math.random()*splitted.length)-2)];

    while(x1.length < 2000){
        x1 += " ";
    }
    if(x2.length<100){
        while(x2.length < 100){
            x2 += " ";
        }
    }else{
        x2 = x2.substr(0,100);
    }

    return {
        input:toBytes(x1),
        output:toBytes(x2)
    };
}



for(let i=0; i < 2; i++){
    var set = [
        getTPair(),getTPair(),getTPair()
    ];
    network.trainer.train(set);
    console.log(`Trained ${i.toString()}/1000`);
}

function Act(str){
    var x1 = str;
    while(x1.length < 2000){
        x1 += " ";
    }
    var bytes = toBytes(x1);
    var bytes2 = network.activate(byte);
    for(let i = 0; i < bytes2.length; i++){
        bytes2[i] = Math.floor(bytes2[i]);
    }

    var x2 = bin2String(bytes2);
    return x2;

}

module.exports = Act;


///////////////////////////// WARNING ///////////////////////////// 
// DO NOT CONNECT THIS BOT TO (ANY) INTERNET CONNECTION UNLESS YOU HAVE STABILISHED THE LAWS OF ROBOTICS IN
