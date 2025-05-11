var form=document.querySelector("form");
// var inp1=document.querySelector("#inp1");
// var inp2=document.querySelector("#inp2"); there is a better way that is
var inps=document.querySelectorAll('input[type="text"]');//this will select all the inputs which type are text

var error=document.querySelector("#error");
form.addEventListener("submit",function(event){
    event.preventDefault();//this will stop the webpage from refreshing
    // if(inp1.value==='' || inp2.value===''){
    for(var i=0;i<inps.length;i++){
        if(inps[i].value.trim()===''){
            error.textContent="Error,some fields are balnk";
            error.style.color="red";
            break;
        }
    }
    
    
})


