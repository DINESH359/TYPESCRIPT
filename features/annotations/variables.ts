let apple:number =5;

let speed :string="fast";

let hasName :boolean = true;

let nothing : null = null;

let undef : undefined = undefined;

let now:Date = new Date()


//Array 
let Colors:string[] = ["Red" , "Green", "Blue"];

let mynum : number []=[1,2,3];

//Classes 

class Car {

}
let car :Car = new Car();


//Object literal

let point : {x:number ; y:number}={
    x:10,
    y:10
};


//functions 

const  logNumber:(i:number)=> void= (i:number)=>{

    console.log(i);
    

}




//when to use type annotations

// case 1 : function that returns the "any" type

const json = '{"x" : 10,"y":20}';
const cordinates :{x:number;y:number}  = JSON.parse(json);

console.log(cordinates);





