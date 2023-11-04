$(".fa-solid").click(function() {
  $(".nav-links").toggleClass("hidden");
  $("body").toggleClass("open-menu");
  $(".navlinks").fadeOut(100).fadeIn(100);
});

$(".ham-links").click(function() {
  $(".nav-links").addClass("hidden");
  $("body").removeClass("open-menu");
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  $(".fa-thin").toggleClass("fa-moon");
  $(".fa-thin").toggleClass("fa-sun");
  $(".nav-links").addClass("hidden");
  $("body").removeClass("open-menu");
}


$(".btn").click(function() {
  $(".contea").toggleClass("hidden");
  $("body").toggleClass("open-menu");
});

$(".cls").click(function() {
  $(".contea").addClass("hidden");
  $("body").removeClass("open-menu");
  
});