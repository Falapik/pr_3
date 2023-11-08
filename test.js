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
