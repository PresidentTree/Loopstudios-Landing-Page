let navHeader = document.getElementsByTagName("header")[0];
let navMenu = document.getElementById("navMenu");
let navImg = navHeader.getElementsByTagName("img")[0];
let navButton = navHeader.getElementsByTagName("img")[1];
let navList = document.getElementById("navList");

navButton.onclick = function() {
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    navImg.style.position = "static";
    navButton.style.position = "static";
    navButton.src = "https://raw.githubusercontent.com/PresidentTree/Loopstudios-Landing-Page/134ebee5bae67e1940665c254a8169c808c6d977/images/icon-hamburger.svg";
  } else {
    navMenu.classList.add("active");
    navList.style.position = "absolute";
    navImg.style.position = "fixed";
    navImg.style.top = "2.5rem";
    navButton.style.position = "fixed";
    navButton.style.right = "11.5%";
    navButton.style.top = "2.85rem";
    navButton.src = "https://raw.githubusercontent.com/PresidentTree/Loopstudios-Landing-Page/134ebee5bae67e1940665c254a8169c808c6d977/images/icon-close.svg";
  }
};
