var count = document.querySelector("#counter");
var textarea = document.querySelector("textarea");
textarea.addEventListener("input",function(){
     count.textContent= textarea.value.length;
})