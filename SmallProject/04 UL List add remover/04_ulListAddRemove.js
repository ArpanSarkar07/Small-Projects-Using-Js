var add=document.querySelector("#bt1");
var rem=document.querySelector("#bt2");
var ul=document.querySelector("ul");
var inp=document.querySelector("input");
var li;
add.addEventListener("click",function(){
    if(inp.value.trim()===''){

    }else{
        li=document.createElement('li');
        li.textContent=inp.value;
        ul.appendChild(li);
        inp.value='';
    }


});
rem.addEventListener("click",function(){
    ul.removeChild(li);

});
