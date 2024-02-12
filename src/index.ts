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

interface Book{
    name: string;
    price: number;
}
interface EBook{
    name: string;
    price: number;
    fileSize: number;
    format: string;
}

const book : EBook ={
    name:'Atomic Habit',
    price: 120,
    fileSize:300,
    format: 'pdf'
    
}