function countOccurance(str){
    var x = prompt("Enter the letter")
    re = new RegExp(x,"g")
    var exp = str.match(re) || []
    console.log(exp.length)
}

var str = prompt("enter string")
countOccurance(str)