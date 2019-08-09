var z = prompt("Enter a number")
var arr =[2]

for(var i=3;i<z;i++){
    var flag = 0
    for(var j=2;j<i;j++){
        if(i%j==0){
            flag = 1
            break
        }
        else{
            continue
        }
    }
    if(flag==0){
        arr.push(i)
    }
}

console.log(arr.sort())