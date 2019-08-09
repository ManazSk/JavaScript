three =[]
five =[]

for(var i=3;i<1000;i=i+3){
    three.push(i)
}

for(var i=5;i<1000;i=i+5){
    five.push(i)
}

var multiples = three.concat(five)

var sum =0

for(var i=0;i<multiples.length;i++){
    sum+=multiples[i]
}

console.log(sum)