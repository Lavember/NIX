const synaptic = require("synaptic");
const discord = require("discord.js");

class NeuroticMessage {
    constructor(n){
        var A = new synaptic.Neuron();
        var B = new synaptic.Neuron();
        A.project(B);
        
        var learningRate = .3;

        for(var i = 0; i < 20000; i++)
        {
          
            A.activate(n);
            
           
            B.activate();
            B.propagate(learningRate, n/2); 
        }

        // test it
        A.activate(n);
        this.res = (B.activate().toString());
        

    }
}

module.exports = NeuroticMessage;