// import {v4 as uuidV4} from 'uuid'

// console.log(uuidV4());


// const list = document.querySelector<HTMLUListElement>("#list")
// const form = document.querySelector("#new-task")
// const input = document.querySelector("#new-task-title")

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

// let x = user(13)

// const runafter = (fn: ()=> void)=>{
//    setTimeout(fn , 1000);
// }

// runafter(function(){
//     console.log("Hi There");
//     return 1;
// })