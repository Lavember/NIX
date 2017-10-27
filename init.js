eval = "nananinanão";


// By Lavember#5369



// MODULES START V
const colors = require("colors");
const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");
const memedatabase = require("./f/mdb.js");
const scroll = require("./f/scr/main.js");
const draw2d = require("./f/draw2d/main.js");
const neurotic = require("./f/neurotic/main.js");
const synaptic = require("synaptic");
const cashsystem = require("./f/cash_system/main.js");


// MODULES END ^
var config = require("./../nix-config.json");
var _using_TOKEN = config.t;

// For avoiding token stealing
var bot = {
    token: "bkKmE3S1JZL7eIf5TkYwbmaI8jk0IOGBa13LCsgNQ69L3dvgaZ6ysvSUzzBLmATGHvXxQinqeRmhrSZiYWn431ld5" // FALSE TOKEN
};


// EVENTS CONNECTION
client.on('ready', onInit);
client.on('message', (msg) => {


    // a start

    try{
        



    if(msg.author.id != client.user.id){
        msgLog(msg.content)
    }

    // Split the message into arguments and make a post-cmd string
    var split_string = msg.content.split(' ');
    var post_cmd = "";
    var cmd = split_string[0];

    if (split_string.length>1){
        for(let i = 1; i < split_string.length; i++){
            post_cmd += split_string[i] + " ";
        }
    }

    // Analyze commands

    if (cmd == "=memedb" || cmd == "=mdb" || cmd == "=memedatabase"){


       

        // If there is no argument the help shows in!!!!!!!!!!!!!!!!!!!!!!!!1!
        if (post_cmd == ""){
            msg.channel.send("**"+ msg.author.username + "**, this command is used for searching in a meme gallery!\n`=memedb random` `=memedb list` `=memedb <name>`");
        
        }else{
            if(post_cmd == "random "){
                var randomMeme = memedatabase.getRandomPicture(); // get random meme from db
                msg.channel.send(` ${msg.author.username} here is your inside joke .-. ${randomMeme.url}`);

            } else if (post_cmd == "list "){
                var repl = "";

                for(let i = 0; i < memedatabase.getAllPictures().length; i++){
                    var citem = memedatabase.getAllPictures()[i]; 
                    var leng = memedatabase.getAllPictures().length;
                    repl += " - **" + citem.name + "**\n"; // Add item to list
                }

                msg.channel.send(repl);
            } else {
                var searchImage = memedatabase.getPictureByName(post_cmd);
                if(searchImage == 0){ // If there is no image
                    msg.channel.send("There is no meme in the database with this name. Check spelling.") // no img
                    console.log(post_cmd + "|");
                } else{
                    msg.channel.send(` ${msg.author.username} here is your inside joke .-. ${searchImage.url}`); // yes img
                }
            }
        }


    } else if (cmd == "=scr"){
        if(post_cmd != ""){
            try{
                var myscroll = new scroll(); // create scroll unit
                var output = myscroll.executeLineCode(post_cmd); // execute
                msg.channel.send(output); // show
            }catch(e){
                msg.channel.send(e.message); // show error
            }
        }else{
            msg.channel.send("**Usage:** x + y put");
        }
    } else if (cmd == "=draw2d"){
        
        if(msg.author.id == 225677166690435082){
            var d2d = new draw2d(msg.channel); // start draw2d message
        }

    } else if(cmd == "=neurotic"){
        var nmsg = new neurotic(parseInt(post_cmd)); // start neurotic message
        msg.reply(nmsg.res); // reply with answer
    } else if(cmd == "=cash"){
        var csystem = new cashsystem(); // create cash system to database manipulation
        var requestedId = msg.mentions.members.size == 0 ? msg.author.id : msg.mentions.members[0].id; // get requested id

        var reqIdInDB = csystem.IsUserInDatabase(requestedId); // is requested id in database?

        if(reqIdInDB){ // if it is
            msg.reply(" you have an amount of " + csystem.GetIDsCash(requestedId).toString() + " demencoins!!1");
        }else{ // if it isnt

            csystem.AddToDatabase(requestedId,1); // add account to database

            
            msg.reply(" you have an amount of " + csystem.GetIDsCash(requestedId).toString() + " demencoins!!1\n+ you did not have an demenbank account so i have made one for you!!!!");
        }
    } else if(cmd == "=talk"){
        msg.reply(" sorry, this command was deactivated due to skynet-safe purposes.");
    } else if(cmd == "=mine"){

        if(msg.guild != null){
                var csystem = new cashsystem();
                var requestedId = msg.mentions.members.size == 0 ? msg.author.id : msg.mentions.members[0].id; // get requested id

                var reqIdInDB = csystem.IsUserInDatabase(requestedId); 

                if(reqIdInDB){ 
                    var foundSquaret = Math.floor(Math.random()*1000);
                    var raritySquaret = csystem.GetSquaret(msg.guild.id) == undefined ? 800 : csystem.GetSquaret(msg.guild.id);
                    if(foundSquaret>=raritySquaret){
                        var uC = csystem.GetIDsCash(requestedId);
                        var adding = Math.floor((Math.floor(Math.random()*10))/1.5);
                        csystem.SetCash(requestedId,uC+adding);
                        msg.reply(" so i added D$" + adding + " to your account so now you have " + (uC+adding));
                    }else{
                        msg.channel.sendMessage(":warning: **You haven't found anything!**\n*NOTE:You have a chance to find something based on your squaret.*\n\n**Hey, if you are the owner of this server, you can pay D$200 to reduce 30 in the rarity squaret using =rdcsquaret   ");
                    }
                }else{ 

                    csystem.AddToDatabase(requestedId,1); 

                    
                    msg.reply(" you didn't have an bank account so i made u one!!!!\nPlease type =mine again so you can mine some coins");
            }
        }else{
            msg.reply(" YOU NEED TO DO DAT IN A SERVER");
        }

    } else if(cmd == "=rdcsquaret"){
        

    }
    



    }catch(e){
        console.log(e.message);
    }

    // a end

});

// EVENTS

function onInit(){
    console.log("bot.".white + "ready".green);
}





// Other functions

function msgLog(text){
    var fc = "";
    fs.readFile("./logged_messages.log",(e,data) => {
        if (e){
            console.log("ERROR TRYING TO LOG MESSAGE !!!".red);

        }
        fs.writeFile("./db/logged_messages.log", data + " [|||] " + text);
    })

    
    
}


var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

// Connect 
client.login(_using_TOKEN);
