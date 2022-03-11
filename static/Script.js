// //mobile nav
let hamburger = document.getElementsByClassName("nav-ham")[0];
let close = document.getElementsByClassName("nav-close")[0];
let nav_li = document.getElementsByClassName("nav-li");

hamburger.addEventListener("click", function () {
  console.log("ham clicked");
  close.style.display = "block";
  hamburger.innerHTML = ``;
  showHideNavelinks("show", nav_li);
});

close.addEventListener("click", function () {
  console.log("close clicked");
  hamburger.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  close.style.display = "none";
  showHideNavelinks("hide", nav_li);
});

function showHideNavelinks(command, nodelist) {
  if (command === "show") {
    for (var i = 0; i < nodelist.length; i++) {
      nodelist[i].style.display = "block";
    }
  }
  if (command === "hide") {
    for (var i = 0; i < nodelist.length; i++) {
      nodelist[i].style.display = "none";
    }
  }
}
// if (this.innerWidth < 600) {
//   showHideNavelinks("hide", nav_li);
// }

// document.addEventListener("change", function () {
//   if (this.innerWidth < 600) {
//     showHideNavelinks("hide", nav_li);
//   } else {
//     showHideNavelinks("show", nav_li);
//   }
// });
