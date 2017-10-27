const fs = require("fs");
var database = require("./../../db/money.json");
var squaretdatabase = require("./../../db/raritySquaret.json");

class CashSystem {
    constructor(){

    }

    GetIDsCash(id=0){
        var value = null;

        for(let i = 0; i < database.length; i++){
            if(database[i].id == id){
                value = database[i];
            }
        }

        if(value != null){
            return value.cash;
        }

        return null;
    }

    IsUserInDatabase(id=0){
        var value = false;

        for(let i = 0; i < database.length; i++){
            if(database[i].id == id){
                value = true;
            }
        }

        return value;
    }

    AddToDatabase(id=0,cash=0){
        database.push({id:id,cash:cash});
        this.Update();
    }

    SetCash(id=0, cash = 0){

        for(let i = 0; i < database.length; i++){
            if(database[i].id == id){
                database[i].cash = cash;
                
            }
        }
        this.Update();

    }

    GetSquaret(id=0){
        var value = null;

        for(let i = 0; i < squaretdatabase.length; i++){
            if(squaretdatabase[i].id == id){
                value = squaretdatabase[i]["squaret"];
            }
        }

        if(value != null){
            return value.cash;
        }

        return 800;
    }

    SetSquaret(id=0,squaret=0){
        for(let i = 0; i < squaretdatabase.length; i++){
            if(squaretdatabase[i].id == id){
                squaretdatabase[i]["squaret"] = squaret;
                
            }
        }
        this.SquaretUpdate();
    }

    Update(){
        var toWrite = JSON.stringify(database);
        fs.writeFile("E:\\wXX\\NIX\\db\\money.json", toWrite);
    }

    SquaretUpdate(){
        var toWrite = JSON.stringify(squaretdatabase);
        fs.writeFile("E:\\wXX\\NIX\\db\\raritySquaret.json", toWrite);
    }
}

module.exports = CashSystem