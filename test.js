const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function toggleLinks() {
  const buttonText = document.querySelector(".btn2");
  const buttonIcon = document.querySelector(".btn1");
  let par = document.querySelectorAll(".repare-none");
  let link = document.querySelectorAll(".links");

  if (par[0].style.display === "none") {
    par.forEach((el) => {
      el.style.display = "block";
    });
    buttonIcon.classList.add("active");
    buttonText.innerHTML = "Скрыть";
  } else {
    par.forEach((el) => {
      el.style.display = "none";
    });
    buttonText.innerHTML = "Показать всё";
    buttonIcon.classList.remove("active");
  }
  if (link[0].style.display === "none") {
    link.forEach((link) => {
      link.style.display = "block";
    });
  } else {
    link.forEach((link) => {
      link.style.display = "none";
    });
  }
}

function toggleText() {
  const buttonIconFirst = document.querySelector(".main-info__readmore-icon");
  const buttonTextFirst = document.querySelector(".main-info__readmore-text");
  let text = document.querySelector(".main-info__text1");

  if (text.style.display === "none") {
    text.style.display = "block";
    buttonIconFirst.classList.add("active");
    buttonTextFirst.innerHTML = "Скрыть";
  } else {
    text.style.display = "none";
    buttonTextFirst.innerHTML = "Показать всё";
    buttonIconFirst.classList.remove("active");
  }
}

const text2 = document.getElementById("showMenu");
const rect = document.querySelector(".suare");

text2.addEventListener("click", function () {
  if (rect.style.display === "none") {
    rect.style.display = "block";
  } else {
    rect.style.display = "none";
  }
});

const btnPhone = document.querySelector(".slidbar-actions__menu");
const btnClose = document.querySelector(".feedback-close");
const feedback = document.querySelector(".feedback");
const rectFeedback = document.querySelector(".rect-feedback");
const btnCall = document.querySelector(".slidbar-actions__menu--message");
const btnCloseCall = document.querySelector(".call-exit");
const call = document.querySelector(".call");
const rectCall = document.querySelector(".rect-feedback");

btnPhone.addEventListener("click", function () {
  feedback.classList.add("acive2");
  rectFeedback.style.display = "block";
  call.classList.remove("acive4");
});

btnClose.addEventListener("click", function () {
  feedback.classList.remove("acive2");
  rectFeedback.style.display = "none";
});

btnCall.addEventListener("click", function () {
  call.classList.add("acive4");
  rectFeedback.style.display = "block";
  feedback.classList.remove("acive2");
});

btnCloseCall.addEventListener("click", function () {
  call.classList.remove("acive4");
  rectFeedback.style.display = "none";
});
