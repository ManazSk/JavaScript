var a = [-5,-2,-6,-8,-1]

max = a[0]

a.forEach(function(x){
    if(max<x){
        max = x
    }
})

console.log(max)