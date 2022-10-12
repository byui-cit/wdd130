const themeSelector = document.getElementById("theme");

function changeTheme(e) {
  //this works, but we should probably check to see which option is selected and remove/add classes accordingly
  if (themeSelector.value == "dark") {
    document.body.classList.add("dark");
    document.querySelector(".logo").src = "byui-logo_white.png";
  } else {
    document.body.classList.remove("dark");
    document.querySelector(".logo").src = "logo.webp";
  }

  // fix blue H2...not enough contrast...mention accessability
}

themeSelector.addEventListener("change", changeTheme);
