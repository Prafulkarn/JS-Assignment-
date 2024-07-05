// import saybookpage from"./book.js";
// saybookpage();
// function sayhello(){
//     alert("hello world");
// }
// // let obj={
// //     id:1,
// //     fname:"praful karn",
// //     faculty:"computer",
// //     gender:"male"


// // }
// function add()
// {
//     let a=document.getElementById("first").value;
//     let b=document.getElementById("second").value;
    
//    let c=parseInt(a)+parseInt(b);
   
    
//     document.getElementById("result").value=c;
    

// }
import {add} from "./add.js";
let btn=document.querySelector('#button');
btn.addEventListener("click",add);