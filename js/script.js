window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("nav").classList.add("nav-shrink");
    document.querySelector("nav").classList.remove("nav-transparent");
  } else {
    document.querySelector("nav").classList.remove("nav-shrink");
    document.querySelector("nav").classList.add("nav-transparent");
  }
}