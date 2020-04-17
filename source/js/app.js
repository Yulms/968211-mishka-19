"use strict";

const pageHeader = document.querySelector(".page-header");
// без включенного js меню будет показано по умолчанию
pageHeader.classList.add("page-header--closed");
const buttonToggle = document.querySelector(".page-header__toggle");
buttonToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  buttonToggle.classList.toggle("page-header__toggle--active");
  console.log("pageHeader", pageHeader)

  pageHeader.classList.toggle("page-header--closed");
})
