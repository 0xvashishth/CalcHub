const leftWrapper = document.querySelector("#left-wrapper");
const rightWrapper = document.querySelector("#right-wrapper");
const leftContainer = document.querySelectorAll("#left-container");
const rightContainer = document.querySelector("#right-container");
const btnStart = document.querySelector("#btn-start");
const btnEncrypt = document.querySelector("#btn-encrypt");
const btnDecrypt = document.querySelector("#btn-decrypt");
const firstInputEncrypt = document.querySelector("#plaintext");
const firstInputDecrypt = document.querySelector("#ciphertext");

window.addEventListener("load", function () {
  //Display every container when the page loads
  rightContainer.classList.add("active");
  leftContainer.forEach((container) => {
    //Since leftContainer is made of two elements, a forEach is necessary
    container.classList.add("active");
  });
});

//Start button only displays on mobile.
//This function will display off "right-container" and display on "left-container"
btnStart.addEventListener("click", function () {
  rightContainer.classList.remove("active");
  leftContainer.forEach((container) => {
    container.classList.remove("active");
  });

  //When the animation is over (it last 200ms)
  setTimeout(() => {
    rightWrapper.style.display = "none";
    leftWrapper.style.display = "flex";
  }, 200);

  //After the wrappers are already displayed
  setTimeout(() => {
    leftContainer.forEach((container) => {
      container.classList.add("active");
    });
  }, 400);
});

btnEncrypt.addEventListener("click", function () {
  firstInputEncrypt.focus();
});

btnDecrypt.addEventListener("click", function () {
  firstInputDecrypt.focus();
});
