let page = document.body;
let darkMode = document.querySelector(".dark_mode_btn");
let dark = document.querySelector(".dark ");
let light = document.querySelector(".light ");
let hamburgerMeun = document.querySelector(".hamburger_meun ");
let followSiasoft = document.getElementById("follow");

dark.addEventListener("click", (event) => {
  event.stopPropagation();
});
light.addEventListener("click", (event) => {
  event.stopPropagation();
});
darkMode.addEventListener("click", function () {
  var width = window.innerWidth;
  if (width < 700) {
    page.classList.toggle("dark");
  dark.classList.toggle("active");
  light.classList.toggle("active");
  setTimeout(() => {
    page.classList.toggle("bgdark");
  }, 500);
  } else{
    page.classList.toggle("dark");
  dark.classList.toggle("active");
  light.classList.toggle("active");
  setTimeout(() => {
    page.classList.toggle("bgdark");
  }, 500);
  }
});
hamburgerMeun.addEventListener("click", function (){
  hamburgerMeun.classList.toggle("active");
  page.classList.toggle("bgfilter");
});
followSiasoft.addEventListener("click" ,()=>{
  window.location.replace("https://www.siasoft.ir/");
})

