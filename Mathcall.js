let ator = 3.1415926536/180;
let rtoa = 180/3.1415926536;
let ans;
let inputs = document.querySelectorAll('input');
// radian to conner
document.getElementById("callbtn0").onclick = function (){
var indata = document.getElementById("rad_num").value;
var ans = indata * rtoa;
console.log(ans);
document.getElementById("ansrad").innerHTML = ans + " °";
}

document.getElementById("clearbtn").onclick = function () {
document.getElementById("ansrad").innerHTML = 0;
inputs.forEach(input => input.value = '');
}
document.getElementById("clearbtn1").onclick = function () {
document.getElementById("ansconner").innerHTML = 0;
inputs.forEach(input => input.value = '');
}
//conner to radian
document.getElementById("callbtn1").onclick = function (){
var indata = document.getElementById("conner_num").value;
var ans = indata * ator;
console.log(ans);
document.getElementById("ansconner").innerHTML = ans + " rad";
}
