function displayAllDetails(obj){
    console.log("CD Name: "+obj.name)
    console.log("CD Publisher: "+obj.publisher)
    console.log("Final Price: "+obj.fprice)
}

var obj =function(name,publisher,price){
    this.name = name
    this.publisher = publisher
    this.price = price

    this.fprice = this.price + 0.1*this.price - 0.03*this.price
}

var c = new obj("Harry Potter","Penguin",100)

displayAllDetails(c)
