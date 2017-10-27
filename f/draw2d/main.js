/*

This is draw2d's code. 


Lavember#5369

*/

const discord = require("discord.js");


class draw2dMessage {
    
    constructor(channel){ 
        
        this.channel = channel;
       
        // Create message.

        this.channel.sendMessage("```\nloading\n```").then(msg => {
            setInterval(function(){
           try{
            
               if(msg){
                    msg.edit("```\n" + Date() + "             NIX (Demenbot)\n```");
               }

           }catch(e){
               console.log("error#" + e.message);
           }



        },1000);
        });
        
        

    }

}

  
module.exports = draw2dMessage;