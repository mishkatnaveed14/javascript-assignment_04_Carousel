var centerimg = document.getElementById("center_img");
var left_img = document.querySelectorAll(".left_img img");
let index = 0;
function changeimg(element) {
  for (let i = 0; i < left_img.length; i++) {
    if (left_img[i] === element) {
      index = i;
      break;
    }
  }
  updateimg();
}
function updateimg() {
  centerimg.style.opacity = 0;
  setTimeout(() => {
    centerimg.src = left_img[index].src;
    centerimg.style.opacity = 1;
  }, 150);

  left_img.forEach((img) => img.classList.remove("active"));

  left_img[index].classList.add("active");
}
function nextimg() {
  index++;
  if (index >= left_img.length) {
    index = 0;
  }
  updateimg();
}
function previmg() {
  index--;
  if (index < 0) {
    index = left_img.length - 1;
  }
  updateimg();
}
