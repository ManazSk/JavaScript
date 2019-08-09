function alternateComine(x,y){
    var z = []

    for(var i=0;i<x.length;i++){
        z.push(x[i])
        z.push(y[i])
    }
    
    console.log(z)
    
}

var x = ['a','b','c']
var y = [1,2,3]

alternateComine(x,y)