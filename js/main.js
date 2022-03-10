var chooseTheme = document.getElementById("choose__theme");
var themeTrans = document.getElementById("theme__transf");
console.log(chooseTheme);
chooseTheme.onclick = function(){
    chooseTheme.classList.toggle("moon__theme");
    themeTrans.classList.toggle("dark__theme");
}
