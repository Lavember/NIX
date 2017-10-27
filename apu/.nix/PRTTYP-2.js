
// custom neural system

var sample_neuron = {
    input:0,
    
    output:function(){
        return input;
    }
}


function act(array=[]){
    var network = {
        neurons:array
    };

    // testing

    network.neurons.forEach((n) => {
        n.input = n.output();
    });

    
    
}


// code