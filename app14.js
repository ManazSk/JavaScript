try{
    var a = prompt("enter numerator")
    var b = prompt("enter denominator")
    if(b==0){
        throw "Divide By Zero Error"
    }
    else{
        alert(a/b)
    }
}
catch(err){
    alert(err)
}