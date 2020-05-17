"use strict";

var pageHeader = document.querySelector(".header");
// без включенного js меню будет показано по умолчанию
pageHeader.classList.add("header--closed");
pageHeader.classList.remove("header--no-js");
var buttonToggle = document.querySelector(".header__toggle");
buttonToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  buttonToggle.classList.toggle("header__toggle--active");
  pageHeader.classList.toggle("header--closed");
});


var modalCart = document.querySelector(".modal--cart");
var buttonsCartAdd = document.querySelectorAll(".js-add2cart");

if (buttonsCartAdd) {
  for (var i = 0; i < buttonsCartAdd.length; i++) {
    buttonsCartAdd[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modalCart.classList.remove("modal--closed");
    });
  };
};

if (modalCart) {
  modalCart.addEventListener("click", function (evt) {
    // если клик по overlay
    if (evt.target.classList.contains("modal")) {
      evt.target.classList.add("modal--closed");
    };
  });
};

// закрытие окна по нажатию esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!modalCart) return;
    if (!modalCart.classList.contains("modal--closed")) {
      evt.preventDefault();
      modalCart.classList.add("modal--closed");
    };
  };
});

// Обычная загрузка карты
/*
if (document.querySelector("#map")) {
  ymaps.ready(function () {
    var petersburgMap = new ymaps.Map("map", {
      center: [59.938632, 30.323113],
      zoom: 16
    });

    var myPlacemark = new ymaps.Placemark(petersburgMap.getCenter(), {
      balloonContentHeader: "Магазин 'Мишка'",
      balloonContentBody: "Милые штучки для любимых",
      balloonContentFooter: "и не только",
      hintContent: "Мы находимся здесь"
    }, {
      iconLayout: "default#image",
      iconImageHref: "../img/map-pin.svg",
      iconImageSize: [67, 100],
      iconImageOffset: [-33, -100]
    });

    petersburgMap.geoObjects.add(myPlacemark);
  });
};
*/

// Отложенная загрузка карты
if (document.querySelector("#map")) {

  setTimeout(function () {
    var elem = document.createElement('script');
    elem.type = "text/javascript";
    elem.src = "https://api-maps.yandex.ru/2.1/?apikey=e46ca710-c34e-4eb0-af87-f1ae0cc4898a&lang=ru_RU";
    document.getElementsByTagName("body")[0].appendChild(elem);
  }, 3000);

  setTimeout(function () {
    ymaps.ready(function () {
      var petersburgMap = new ymaps.Map("map", {
        center: [59.938632, 30.323113],
        zoom: 16
      });

      var myPlacemark = new ymaps.Placemark(petersburgMap.getCenter(), {
        balloonContentHeader: "Магазин 'Мишка'",
        balloonContentBody: "Милые штучки для любимых",
        balloonContentFooter: "и не только",
        hintContent: "г. Санкт-Петербург, <br>ул. Большая Конюшенная, д.&nbsp;19/8,&nbsp;офис&nbsp;101"
      }, {
        iconLayout: "default#image",
        iconImageHref: "img/map-pin.svg",
        iconImageSize: [67, 100],
        iconImageOffset: [-33, -100]
      });

      petersburgMap.geoObjects.add(myPlacemark);
    });
  }, 5000);
};
