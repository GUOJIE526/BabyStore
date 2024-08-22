// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
let slideImgs = document.getElementById("slideimgs");
let pagesLi = document.querySelectorAll(".pagesLi");
// console.log(pagesLi);
let index = 0;
pagesLi[index].style.opacity = 1;
for (let i = 0; i < pagesLi.length; i++) {
  pagesLi[i].num = i;
  pagesLi[i].addEventListener("mouseenter", function () {
    index = this.num;
    moveImg();
  });
}
//右箭頭
let right = document.getElementById("slideNext");
right.addEventListener("click", function () {
  index++;
  if (index >= pagesLi.length) {
    index = 0;
  }
  moveImg();
});
//left
document.getElementById("slidePrev").addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = pagesLi.length - 1;
  }
  moveImg();
});
function moveImg() {
  let slideMove = -1000 * index;
  slideImgs.style.left = slideMove + "px";
  slideImgs.style.transform = `translateX(-${slideMove}%)`;
  for (let j = 0; j < pagesLi.length; j++) {
    pagesLi[j].style.opacity = 0.3;
  }
  pagesLi[index].style.opacity = 1;
}
//setTime
setInterval(autoImg, 2000);
function autoImg() {
  index++;
  if (index >= pagesLi.length) {
    slideImgs.style.transition = "none";
    index = 0;
    slideImgs.style.transform = `translateX(0%)`;
    setTimeout(function () {
      slideImgs.style.transition = ""; // 恢復過渡效果
    }, 0);
  }
  moveImg();
}
