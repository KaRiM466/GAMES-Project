/*      navbar    */
var toggle = document.getElementById("toggle");
var ulNav = document.getElementById("ul-nav");

function myFunction() {
    ulNav.classList.toggle("ul-toggle");
}
toggle.addEventListener("click", () => {
    myFunction();
})