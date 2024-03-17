// import {v4 as uuidV4} from 'uuid'

// console.log(uuidV4());


const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector("#new-task")
const input = document.querySelector("#new-task-title")

const Greets = (firstname: string)=>{
       
    firstname = "Sanagam"
    console.log("Hello", firstname);
    
}

const sum = (a:number , b:number): number=>{
       return a + b
}

console.log(sum(12,12));

const user = (age: number)=>
{
      if (age > 18) {
         return true;
         
      }
       else{
        return false;
       };
      
}


let x = user(13)

const runafter = (fn: ()=> void)=>{
   setTimeout(fn , 1000);
}

runafter(function(){
    console.log("Hi There");
    return 1;
})

interface User{
    firstname: string;
    lastname: string;
    age:number;
    email?: string;
}


const Isleagel = (user: User)=>{
   if (user.age > 19) {
    return true
   }else {
    return false
   }
}

Isleagel({
    firstname: "sangam",
    lastname:"dalal",
    age: 20,
    
})
console.log(Isleagel());


interface Person {
    name:string;
    age:number;
    greet(phrase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;
    constructor(n: string, a: number){
        this.name = n;
        this.age = a;
    }
    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
        
    }
}

interface Person {
    name:string;
    age:number;
}

type user = {
    name:string;
    age:number;
}

function UserId (id:string | number){
     console.log(`ID: ${id}`);
     
}







enum Directions {
    Up,
    down,
    Left,
    Right
}
function Dosomething(keypressed:Directions){
    if(keypressed == Directions.Up){

    }
}


Dosomething(Directions.Right)

type Input = number | string
function Firstel (arr : Input[]){
       return arr[0]
}
NewUpdate(Directions.Right)

type Input = number | string
function ThirdRel (arr : Input[]){
       return arr[0]
}
NewUpdate(Directions.Right)

type Input = number | string
function SeconRel (arr : Input[]){
       return arr[0]
}



