var btn=document.querySelector("button");
var p=document.querySelector("p");
btn.addEventListener("click",function(){
    p.style.color="red";
});
btn.addEventListener("dblclick",function(){
    p.style.color="black";
});
