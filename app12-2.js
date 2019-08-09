var grades =[30,33,55,59,67,78,88,10,50,70]

var total = 0;
for(var i = 0; i < grades.length; i++) {
    total += grades[i];
}
var avg = total / grades.length;

alert("Average marks is "+avg)