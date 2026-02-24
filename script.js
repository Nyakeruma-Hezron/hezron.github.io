function scrollToContact() {
document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

window.addEventListener("scroll", function(){
const bars = document.querySelectorAll(".bar");
bars.forEach(bar => {
const rect = bar.getBoundingClientRect();
if(rect.top < window.innerHeight){
bar.style.width = bar.getAttribute("data-width");
}
});
});