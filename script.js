const line = document.getElementById("line");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  line.style.width = value * 0.5 + "px";
});
