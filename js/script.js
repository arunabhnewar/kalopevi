document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.onkeydown = (e) => {
  if (
    e.key == 123 ||
    (e.ctrlKey && e.shiftKey && e.key == "I") ||
    (e.ctrlKey && e.shiftKey && e.key == "C") ||
    (e.ctrlKey && e.shiftKey && e.key == "J") ||
    (e.ctrlKey && e.key == "U") ||
    e.key == "F12"
  ) {
    e.preventDefault();
  }
};
