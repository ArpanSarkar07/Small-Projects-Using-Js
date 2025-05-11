// var home=document.querySelector("#Home");
// var hometext=document.querySelector("#Hometext");
// var about=document.querySelector("#About");
// var abouttext=document.querySelector("#Abouttext");
// var contact=document.querySelector("#Contact");
// var contacttext=document.querySelector("#Contacttext");

// home.addEventListener("click",function(){
//     removeAllText();
//     hometext.style.display='block';
//     hometext.style.width="50%"

// });
// about.addEventListener("click",function(){
//     removeAllText();
//     abouttext.style.display='block';
//     abouttext.style.width="50%"
// });
// contact.addEventListener("click",function(){
//     removeAllText();
//     contacttext.style.display='block';
//     contacttext.style.width="50%"
// });

// function removeAllText(){
//     document.querySelectorAll("h3").forEach(function(h3){
//         h3.style.display="none";
//     })
// }
//More efficient way is :

var divs=document.querySelectorAll(".tabs");
var texts=document.querySelectorAll("h3");

texts[0].style.display="block";
texts[0].style.width="50%";

divs.forEach(function(div,index){
    div.addEventListener("click",function(){
        hideAllText();
        texts[index].style.display="block";
        texts[index].style.width="50%";
    });
});
function hideAllText(){
    texts.forEach(function(text){
        text.style.display="none";
    });
};