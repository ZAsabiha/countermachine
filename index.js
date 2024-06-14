const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const counts = document.getElementById("counts");
let count=0;
decrease.onclick = function(){
    count--;
    counts.textContent = count;
}
increase.onclick = function () {
    count++;
    counts.textContent = count;
}
reset.onclick = function () {
    count=0;
    counts.textContent = count;
}