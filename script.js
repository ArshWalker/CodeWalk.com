const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
});

close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
});

var typed = new Typed(".typing", {
  strings: ["Web Developer", "Coder", "ReactJs Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing-2", {
  strings: ["Web Developer", "Coder", "ReactJs Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

$(".navbar").hide();
$(window).scroll(function () {
  if ($(window).scrollTop() > 40) {
    $(".navbar").slideDown(100);
  } else {
    $(".navbar").slideUp(100);
  }
});
