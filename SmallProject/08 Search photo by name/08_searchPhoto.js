var data =[
    {name:"jasmine",src: "https://images.unsplash.com/photo-1530254541043-129f4c372200?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGh1bWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww"},
    {name:"tyla",src: "https://images.unsplash.com/photo-1651131290076-bd5113da5f1d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGh1bWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww"},
    {name:"leon",src: "https://images.unsplash.com/photo-1729075510531-bed3ee89bc6c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"timy",src: "https://images.unsplash.com/photo-1618353446411-c221ae85034e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGh1bWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww"},
]
let pers="";
data.forEach(function(elem){
    pers +=`<div class="person">
    <div class="img">
        <img src="${elem.src}"alt="" >
    </div>
    <h4>${elem.name}</h4>

</div>`;
})

document.querySelector("#people").innerHTML=pers;


var inpt=document.querySelector("input");
inpt.addEventListener("input",function(){
    // console.log(inpt.value);
    var matching = data.filter(function(e){
        return e.name.startsWith(inpt.value);
    })
    var newU="";
    matching.forEach(function(elem){
        newU +=`<div class="person">
        <div class="img">
            <img src="${elem.src}"alt="" >
        </div>
        <h4>${elem.name}</h4>
    
    </div>`;
    })
    
    document.querySelector("#people").innerHTML=newU;
})