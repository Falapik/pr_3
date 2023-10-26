const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,

  // If we need pagination
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

  console.log(buttonText);

  if (par[0].style.display === "none") {
    par.forEach((el) => {
      el.style.display = "block";
    });
    buttonIcon.classList.add("active");
    buttonText.innerHTML = "Скрыть"; // Optionally, you can update the button label
  } else {
    par.forEach((el) => {
      el.style.display = "none";
    });
    buttonText.innerHTML = "Показать всё"; // Optionally, you can update the button label
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