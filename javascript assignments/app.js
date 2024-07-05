// console.log("document");
// let donkey=document.getElementById("heading");
// donkey.style.color="red";
// donkey.style.textDecoration="underline";
// donkey.style.backgroundColor="yellow";
// donkey.style.cssText="color:blue;text-decoration:underline;background-color:yellow";
// donkey.innerHTML="Hello world";

// p.innerHTML
let div=document.createElement("div");
let p=document.createElement("p");
let heading=document.createElement("h1");
heading.innerText="hello"
div.append(heading)
div.append(p);
document.body.appendChild(div);
div.style.cssText=("border:20px solid black");



 async function fetchdata(){
    let response=await fetch("https://fakestoreapi.com/products/1");
    if(response.ok){
        let data=await response.json();
        console.log(data);
    //   data.categories.forEach(m)

      }
    };


fetchdata();
function displayresult(data){
    data.categories.forEach(m) =>{
        let container=document.getElementById("container");
        let div=document.createElement("div");
        let h2=document.createElement("h2")
        let img=document.getElement("img");
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
    }
 };
displayresult();
