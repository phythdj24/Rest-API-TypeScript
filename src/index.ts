// // let age : number = 20

// // if (age < 50)
// //     age += 10;

// // function sum(a: number,b: number):number{
// //     return a+b
// // }

// // console.log(sum(5,10));

// // let Myname = true;
// // let Isdone: any = true;

// // Isdone = "Yes"

// //Interfaces

// interface Transition{
//     payerAccountNumber: number;
//     payeeAccountNumber: number

// }

// interface BankAccount{
//     accountNumber: number;
//     accountHolder: string;
//     balance: number;
//     isActive: boolean;
//     transaction: Transition[]
// }

// const transaction1 : Transition ={
//     payeeAccountNumber: 123,
//     payerAccountNumber:232,
// };

// const transaction2 : Transition ={
//     payeeAccountNumber: 444,
//     payerAccountNumber:232,
// };
// const bankAccount: BankAccount = {
//      accountNumber: 123,
//      accountHolder: "John doe",
//      balance: 2211,
//      isActive: true,
//      transaction: [transaction1]
// }

//extend

// interface Book{
//     name: string;
//     price: number;
// }
// interface EBook{
//     name: string;
//     price: number;
//     fileSize: number;
//     format: string;
// }

// const book : EBook ={
//     name:'Atomic Habit',
//     price: 120,
//     fileSize:300,
//     format: 'pdf'

// }

// interface book{
//     name:string;
//     price: string;
// }

// interface book{
//     size: number
// }

// const Book:book ={
//     name: "Atomic habit",
//     price:'12',
//     size: 12
// }

// type Book = {
//     name:string;
//     price: number;
// }

//UNIONS

// type ID = number | string;

// const printId = (id: ID)=>{
//     if(typeof id === 'string')
//     {
//         console.log(id.toUpperCase());

//     }
//         console.log(id);

// }

// printId('hello tsandjs');

// const getFirstThree= (x: string | number[]) =>{
//     return x.slice(0,3)
// }

// console.log(getFirstThree([1,2,3,4,5,6,4]));

//Genrics

// interface HasAge {
//   age: number;
// }
// const getOldest = (people: HasAge[]) => {
//   return people.sort((a, b) => b.age - a.age)[0];
// };

// const people = [{ age: 30 }, { age: 33 }, { age: 63 }, { age: 43 }];

// interface Player {
//     name:string;
//     age: number;
// }
// const Players:Player[] = [
//   { name: "Johne", age: 89 },
//   { name: "roman", age: 24 },
//   { name: "evsile", age: 23 },
//   {name: 'hane', age: 55},
// ];
// getOldest(Players)

interface Ipost {
  title: string;
  id: number;
  description: string;
}
interface IUser {
  name: string;
  id: number;
  age: number;
}

const FetchPostData = async (path: string): Promise<Ipost[]> => {
  const resposne = await fetch(`http://example.com${path}`);
  return resposne.json();
};
const FetchUsersData = async (path: string): Promise<IUser[]> => {
  const resposne = await fetch(`http://example.com${path}`);
  return resposne.json();
};

const FetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const resposne = await fetch(`http://example.com${path}`);
  return resposne.json();
};



(async () => {
  //  const posts = await FetchData('/posts');
  //  posts[0]

  const users = await FetchUsersData("/users");
  users[0];
})();
