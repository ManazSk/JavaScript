function count(){
    var x = document.getElementById("dropmenu")
    var len = x.options.length
    for(var i=0;i<len;i++){
        alert(x.options[i].text)
    }

}