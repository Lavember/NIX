const scrollVariable = require("./var.js");

class ScrollProcessingUnit {
    
    

    constructor(){
        this.vList = [];
        this.lVar = null;
        this.pvWait = false;
        this.pvWaitO = null;
    }

    executeSliceCode(code=""){
        if(code == "0" || code == "1" || code == "2" || code == "3" || code == "4" || code == "5" || code == "6" || code == "7" || code == "8" || code == "9"  ){
            
            var vvv = new scrollVariable(parseInt(code));

            if (this.pvWait == true){

                if(this.pvWaitO == "+"){
                    vvv.value = this.lVar.value + vvv.value;
                } else if(this.pvWaitO == "-"){
                    vvv.value = this.lVar.value - vvv.value;
                } else if(this.pvWaitO == "*"){
                    vvv.value = this.lVar.value * vvv.value;
                }


                this.pvWait = false
            }

            this.vList.push(vvv);
            this.lVar = vvv;

            



        } else if (code == "+" || code == "-" || code == "*" ){
            if (this.lVar != null){
                this.pvWait = true;
                this.pvWaitO = code;
            }else{
                throw new Error("(UNK.VAR.TO.OPERATE)");
            }
        } else if (code == "put"){
            if (this.lVar != null){
                return this.lVar.value;
            }else{
                throw new Error("LVAR IS NULL");
            }
        }

        return ".";
    }

    executeLineCode(code = ""){
        var sliced = code.split(' ');
        for(let i = 0; i < sliced.length; i++){
            var output = this.executeSliceCode(sliced[i]);
            if(output != "."){
                return output
            }
        }

        return "No output.";
    }


}

module.exports = ScrollProcessingUnit;