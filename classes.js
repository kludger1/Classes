function Automobile(wheels){
    this.wheels = wheels;
	this.setColor = (color) => {
		this.color = color
	}
	this.getColor = () => {
        return this.color;
    
    }
}
// // function Motorcycle(make, model, year){
// //     this.make = make;   
// //     this.model = model;
// //     this.year = year;
// }
// Motorcycle.prototype = new Automobile(2)
class Motorcycle extends Automobile {
    constructor(make, model, year){
        super(2)
        this.make = make;
        this.year = year;
        this.model = model;
    }
}


let ducati = new Motorcycle('Ducati','Z-9000', 2016)

let rebel = new Motorcycle('Honda', 'Rebel 300', 2017)

let triumph = new Motorcycle('Triumph', 'Street Cup', 2017)


// function Sedan (make, model, year){
//     this.make = make;   
//     this.model = model;
//     this.year = year;
//     this.door = door = 4;
// }

// Sedan.prototype = new Automobile(4)
class Sedan extends Automobile {
    constructor(make, model, year,Horsepower,Acceleration){
        super(4)
        this.make = make;
        this.year = year;
        this.model = model;
        this.Horsepower = Horsepower;
        this.Acceleration = Acceleration;
    }
}
let maybach = new Sedan ('Mercedes', 'Maybach', 2012, 463, 4.8)
console.log(maybach)


// function Camry(){

// }
// Camry.prototype = new Sedan('Toyota','Camry', 9999)
// let camry = new Camry()
// console.log(camry.wheels, camry.door)
// // camry.year =2010
// // console.log(camry.year)