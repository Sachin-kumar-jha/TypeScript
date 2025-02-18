// interface User{
//     name:string;
//     age:number;
// };

// function sumOfAge(user1:User,user2:User){
//     return user1.age + user2.age;
// }

// const age=sumOfAge({name:"sachin",age:20},{name:"gagan",age:30});
// console.log(age);

//Pick in typescript

// interface User{
//     id:string;
//     name:string;
//     age:string;
//     email:string;
//     password:string;
// };

// //Pick selcted type from existing values
// type UpdateProps=Pick<User,'name' | 'age' |'email'>

// function updateUser(UpdateProps:UpdateProps){
//     //hit the database to update the user
// }




//Partial in typescript

//partial gives type optionally with pick 

// interface User{
//         id:string;
//         name:string;
//         age:string;
//         email:string;
//         password:string;
//     };
    
//     //Pick selcted type from existing values
//     type UpdateProps=Pick<User,'name' | 'age' |'email'>
//     type UpdatePropsPartial=Partial<UpdateProps>
    
//     function updateUser(UpdateProps:UpdatePropsPartial){
//         //hit the database to update the user
//     }



//ReadOnly
// 1st method
// type User={
//    readonly name:string,
//    readonly age:string, 
// }
// type User={
//     name:string,
//     age:string,
// }
//2nd method
// const user:Readonly<User>={
//     name:'sachin',
//     age:'21',
// }

// user.name="asdsad"
// user.name="gagan" //Here typescript gives complaint because using readonly inforces to don't change the value of constant

// console.log(user.name);
//Its useful when we calling apikey and 
// endpoint so preventing the risk 
// of changing apikey or endpoint by mistake 
// through a developer so here we make 
// readonly so here changes doesn't happen;


//Records and Map 

// type User={
//      id:number;
//      username:string;
// }

// // type Users={
// //     [key:string]:User;  //This is write by using records as much as clear and cleaner syntax
// // }

//  type Users=Record<string,{age:number,name:string} >;
//  const users:Users={
//  "rasid":{age:21,name:"gagan"},
// // "rasidsd ":{age:32,name:"jiya"},
// }

//Map its a javascript concept for creating key value pair 
// type User={
//     name:string;
//     age:number;
//     email:string;
// }; 
// const users=new Map<string,User> ();
// users.set("ras@",{name:"sachin",age:20,email:"email@gmail.com"});
// users.set("resaf@",{name:"gagan",age:32,email:"gagan@gmail.com"});

// const user=users.get("ras@");
// console.log(user);


//Exclude
//In a function that can accept several types of inputs but ypu want to exclcude specific types from being passed to it .

// type EventType ='click' | 'scroll' |'mousemove';
// type ExcludeEvent=Exclude<EventType ,'scroll'>;//'click' | 'mousemove'

// const handleEvent =(event:ExcludeEvent)=>{
//     console.log(`Handling event :${event}`);
// };
// handleEvent('click');//Ok
// handleEvent('scroll');//Give error because Excluded


