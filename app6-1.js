function allPossibilities(){
 
    // brute force solution
   
    // first calculate all possible combinations
    // of numbers and operators
    var mem = ["1"], combos;
    for(var i = 2; i <= 9; i++){
      combos = [];
      mem.forEach(function(x){
        combos.push(x + i, x + " +" + i, x + " -" + i);
      });
      mem = combos;
    }
   
    // Now filter out the ones that equal 100
    return combos.filter(function(combo){
      // split a combo into numbers, sum them using reduce
      return combo.split(" ").reduce(function(x,y){
        return x/1+y/1;
      }) == 100; // and check if the sum is 100
    })
    // format output by adding some spaces
    .map(function(x){
      return x.replace(/([+-])/g,'$1 ');
    });
   
  }

  var x = allPossibilities()
  console.log(x)