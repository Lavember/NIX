var synaptic = require("synaptic");
var pr_neuron = require("./pr-neuron.js");

class processing_unit{

    constructor(){
        this.neurons = [];

    }

    addNeuron(neuron){
        if (typeof(neuron) == pr_neuron){
            this.neurons.push(neuron);
        }
        
    }

    teach(adress,value){
        var found = null;
        for(let i = 0; i <= this.neurons.length; i++){
            if(i < this.neurons.length){
                if(this.neurons[i].adress == adress){
                    for(let i = 0; i < 10000; i++){
                        this.neurons[i].original_neuron.activate()
                        this.neurons[i].original_neuron.propagate(0.65,value);
                    }
                }
            }
        }
    }

    findByAdress(adress){
        var found = null;
        for(let i = 0; i <= this.neurons.length; i++){
            if(i < this.neurons.length){
                if(this.neurons[i].adress == adress){
                    return this.neurons[i];
                }
            }
        }

        return null;
    }


}

module.exports = processing_unit;