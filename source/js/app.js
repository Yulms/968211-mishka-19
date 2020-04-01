"use strict";

const buttonToggle = document.querySelector(".page-header__toggle");
buttonToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonToggle.classList.toggle("page-header__toggle--active");
  let pageHeader = document.querySelector(".page-header");
  console.log("pageHeader", pageHeader)

  pageHeader.classList.toggle("page-header--closed");
})
