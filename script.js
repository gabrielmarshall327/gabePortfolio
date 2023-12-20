function toggleSheet() {
  var theme = document.getElementsByTagName("link")[0];

  // Change the value of href attribute
  // to change the css sheet.
  // And set the local storage of styles to the right stylesheet
  if (theme.getAttribute("href") == "style.css") {
    theme.setAttribute("href", "style2.css");
    localStorage.setItem("styles", "style2.css");
  } else {
    theme.setAttribute("href", "style.css");
    localStorage.setItem("styles", "style.css");
  }
}

// When the page loads
window.onload = function () {
  // Default local storage
  if (localStorage.getItem("styles") == null) {
    localStorage.setItem("styles", "style.css");
  }
  var style = localStorage.getItem("styles");
  var theme = document.getElementsByTagName("link")[0];
  localStorage.setItem("styles", style);
  theme.setAttribute("href", style);
};
