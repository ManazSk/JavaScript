function lastN(arr,n){
    var result = []

    var len = arr.length
    if(n>len){
        n = len
    }

    for(var i=0;i<n;i++){
        result.push(arr[len-n+i])
    }
    return result
}

var arr = [1,2,3,4,5,6,7,8,9]
var n = prompt("enter n")

console.log(lastN(arr,n))