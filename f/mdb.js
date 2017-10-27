const fs = require("fs");
const _MDB_JSON_ = require("./../db/mdb.json");

class MemePicture {
    constructor(url, name){
        this.url = url;
        this.name = name;
    }
}

module.exports = {
    MPicture: MemePicture,
    getRandomPicture: function(){
        var maxvalue = _MDB_JSON_.length-1;
        var startvalue = 0;
        var rval = _MDB_JSON_[Math.floor(Math.random()*maxvalue)];

        return new MemePicture(rval.url,rval.name);
    },
    getAllPictures: function(){
        var list = [];

        for(let i = 0; i < _MDB_JSON_.length; i++){
            list.push(new MemePicture(_MDB_JSON_[i].url,_MDB_JSON_[i].name));
        }

        return list;
    },
    getPictureByName: function(name=""){
        for(let i = 0; i < _MDB_JSON_.length; i++){
            var citem = _MDB_JSON_[i];

            if(citem.name == name){
                return new MemePicture(citem.url, citem.name);
            }
        }

        return 0;
    }
};