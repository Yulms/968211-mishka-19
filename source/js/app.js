"use strict";

const pageHeader = document.querySelector(".header");
// без включенного js меню будет показано по умолчанию
pageHeader.classList.add("header--closed");
const buttonToggle = document.querySelector(".header__toggle");
buttonToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  buttonToggle.classList.toggle("header__toggle--active");
  console.log("pageHeader", pageHeader)

  pageHeader.classList.toggle("header--closed");
})
