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



