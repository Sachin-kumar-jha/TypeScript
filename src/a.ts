// interface User {
//     firstName:string;
//     lastName:string;
//     Age:number;
// }

// function isLegal(user:User){
//     if(user.Age>18){
//         return true;
//     }else{
//         return false;
//     }
// }

// function greet(user:User){
//     console.log("user firstname:"+user.firstName);
// }

// isLegal({
//     firstName:"mahes",
//     lastName:"kumar",
//     Age:19
// })

// greet({
//     firstName:"mahes",
//     lastName:"kumar",
//     Age:19
// })

//Type in TypeScript

// type User={
//     name:string;
//     id:number;
// }

// function greet(user:User){
//     console.log(user.name);
// }
// greet({
//     name:"sachin",
//     id:3
// });

//Union is basically used for union of two types using type
// type greetArg=number | string | boolean;

// function greet(id:greetArg){
//     console.log(id);
// }

// greet("2344");


// //Intersection using type
// type Employee={
//     name:string,
//     department:string
// }
// interface Manager{
//     name:string;
//     department:string
// };

// type techLead=Employee & Manager;

// const t:techLead={
//     name:"10",
//     department:"database"
// }


//Array type using type
// type NumberArr=number[];
// function maxValue(arr:NumberArr){
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }

// let value=maxValue([1,2,3,4]);
// console.log(value);

//Given a list of users, filter out the users that are legal (greater than 18 years of age)
// interface User{
//     firstname:string;
//     lastname:string;
//     age:number;
// }

// function filterUsers(users:User[]):boolean{
//     const user=users.some((user)=>user.age>18);
//     console.log(user);

// if(user){
//  return true;
//   }else{
//     return false;
//   }

// };

//  let value=filterUsers([
//     {
//         firstname:"sachin",
//         lastname:"jha",
//         age:19,
        
//     },
//     {
//         firstname:"aayush",
//         lastname:"sinha",
//         age:13,
//     }
// ]);

// console.log(value);


// Enum   
//Enum (shirt for enumeration) in TypeScript are a feature that allows you to define a set of named constraints
 //code without enum
//  type KeyInput="up"|"down"|"left"|"right";
//  function doSomething(Keypress:KeyInput){
//     //logic
//  }
//  doSomething("up");
//  doSomething("down");
//using Enum
// enum Direction {
//     Up,
//     Down,
//     left,
//     Right
// }

// function doSomething(Keypress:Direction){
//    if(Keypress==Direction.Up){

//    }
// }

// doSomething(Direction.Up);
// doSomething(Direction.Down);
// console.log(Direction.Up);
// console.log(Direction.Down);
// console.log(Direction.Right);

//Generic
//problem:
 //type Input =number | string;

//  function firstEl(arr:Input[]){
//     return arr[0];
//  }

//  const value=firstEl(["sachin","jha"]);
//  console.log(value.toUpperCase());

//  Here toUpperCase not working because 
//  typeScript not understand because it 
//  check type which is provide by you
//Here strictness check is occurs

//it is solve by writing this code 
// function firstEl(arr:string[]|number[]){
//   return arr[0];
// }
// const value =firstEl(["sachin","sachin"]);

//But toUpperCase still not working so we use generics like we use templates in c++

// function identify<T>(arg:T):T{
//     return arg;
// }

// let output1=identify<string>("String");
// let output2=identify<number>(100);

// console.log(output1.toUpperCase());

// function getFirstElement<T>(arr:T[]):T{
//     return arr[0];
// }
// const el=getFirstElement<string>(["Sachinjha","AdityaSingh"]);
// console.log(el.toUpperCase());

//Emport and export in TypeScript
// const a=1;
// export default a;

// export const b=10;
