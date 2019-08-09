function donation(){
    var x = prompt("enter the donation amount")
    alert("You have donated "+x+" amount!")
}

document.write('<html>'+
'<head></head>'+
'<body>'+
'<button type="button" onclick="donation()">Donate for a cause</button>'+
'</body>'+
'</html>')