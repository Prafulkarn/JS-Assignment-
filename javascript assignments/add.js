 export function add()
{
    let a=document.getElementById("first").value;
    let b=document.getElementById("second").value;
    
   let c=parseInt(a)+parseInt(b);
   
    
    document.getElementById("result").value=c;
    

}