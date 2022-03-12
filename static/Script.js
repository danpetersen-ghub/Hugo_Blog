// //mobile nav
let hamburger = document.getElementsByClassName("nav-ham")[0];
let close = document.getElementsByClassName("nav-close")[0];
let nav_li = document.getElementsByClassName("nav-li");

hamburger.addEventListener("click", function () {
  console.log("Mobile Nav - Expand Clicked");
  close.style.display = "block";
  hamburger.innerHTML = ``;
  showHideNodeList("show", nav_li);
});

close.addEventListener("click", function () {
  console.log("Mobile Nav - Close Clicked");
  hamburger.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  close.style.display = "none";
  showHideNodeList("hide", nav_li);
});

function showHideNodeList(command, nodelist) {
  if (command === "show") {
    console.log("Mobile - Show");
    for (var i = 0; i < nodelist.length; i++) {
      nodelist[i].style.display = "block";
    }
  }
  if (command === "hide") {
    console.log("Mobile - Hide");
    for (var i = 0; i < nodelist.length; i++) {
      nodelist[i].style.display = "none";
    }
  }
}
if (window.innerWidth < 600) {
  showHideNodeList("hide", nav_li);
}

// document.addEventListener("change", function () {
//   if (this.innerWidth < 600) {
//     showHideNavelinks("hide", nav_li);
//   } else {
//     showHideNavelinks("show", nav_li);
//   }
// });
