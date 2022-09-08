document.addEventListener("DOMContentLoaded", () => {
  const toggleIcon = document.querySelectorAll(".togglePassword");
  const password = document.querySelectorAll(
    ".my-account-details-form-password"
  );

  const toggleFunk = (e) => {
    [...password].forEach((elem) => {
      if (e.target.previousElementSibling === elem) {
        const type =
          elem.getAttribute("type") === "password" ? "text" : "password";
        elem.setAttribute("type", type);
        e.target.classList.toggle("icon-eye");
        if (e.target.classList.contains("icon-eye")) {
          e.target.classList.remove("icon-eye-off");
        } else {
          e.target.classList.add("icon-eye-off");
        }
      }
    });
  };

  const addNewArr = (arr) => {
    return [...arr].forEach((element) => {
      element.addEventListener("click", toggleFunk);
    });
  };
  addNewArr(toggleIcon);
});





$(document).ready(function () {
  $("#btn-catalog").hover(function () {
    if (!$(this).hasClass("active")) {
      $(this).find(".dropdown").css({
        visibility: "visible",
        opacity: "1",
        transform: "translate(0px, 0px)",
        display: "block",
      });
      $(this).addClass("active");
    } else {
      $(this).find(".dropdown").css({
        visibility: "hidden",
        opacity: "0",
        transform: "translate(0px, 0px)",
        display: "none",
      });
      $(this).removeClass("active");
    }
  });
  $("#main-banner").slick({
    autoplay: true,
    dots: false,
    autoplaySpeed: 8000,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    prevArrow: "<i class='icon-arrow-radop-left prev-arrow'></i>",
    nextArrow: "<i class='icon-arrow-radop-right next-arrow'></i>",
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $("#partners-slider").slick({
    autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    speed: 1000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".header-top-slider").slick({
    autoplay: false,
    dots: false,
    autoplaySpeed: 5000,
    speed: 1000,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "ease-out",
  });
  $(".catalog-slider")
    .slick({
      autoplay: false,
      dots: false,
      autoplaySpeed: 8000,
      speed: 1000,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: true,
      swipe: false,
      prevArrow: "<i class='fa fa-chevron-left prev-arrow'></i>",
      nextArrow: "<i class='fa fa-chevron-right next-arrow'></i>",
      cssEase: "ease-out",
      rows: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            swipe: true,
            dots: true,
            arrows: false,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            swipe: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    })
    .on("setPosition", function (event, slick) {
      slick.$slides.css("height", slick.$slideTrack.height() + "px");
    });
  $(".categories-cards-slider").slick({
    autoplay: false,
    dots: false,
    autoplaySpeed: 8000,
    speed: 1000,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    prevArrow: "<i class='fa fa-chevron-left prev-arrow'></i>",
    nextArrow: "<i class='fa fa-chevron-right next-arrow'></i>",
    cssEase: "ease-out",
    rows: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          swipe: true,
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".cart-catalog-slider")
    .slick({
      autoplay: false,
      dots: false,
      autoplaySpeed: 8000,
      speed: 1000,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      swipe: false,
      prevArrow: "<i class='fa fa-chevron-left prev-arrow'></i>",
      nextArrow: "<i class='fa fa-chevron-right next-arrow'></i>",
      cssEase: "ease-out",
      rows: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            swipe: true,
            dots: true,
            arrows: false,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            dots: true,
            swipe: true,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    })
    .on("setPosition", function (event, slick) {
      slick.$slides.css("height", slick.$slideTrack.height() + "px");
    });
});

// Slider Product
$(document).ready(function () {
  const $rootSingle = $(".product-slider-main");
  const $rootNav = $(".product-slider-thumb");

  $rootSingle.slick({
    slide: ".product-image",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
  });

  $rootNav
    .on("init", function (event, slick) {
      $(this).find(".slick-slide.slick-current").addClass("is-active");
    })
    .slick({
      slide: ".product-image",
      slidesToShow: 3,
      arrows: true,
      slidesToScroll: 1,
      dots: false,
      focusOnSelect: false,
      infinite: false,
      prevArrow:
        '<button class="slick-prev slick-arrow" type="button"><i class="fa fa-chevron-left"></i></button>',
      nextArrow:
        '<button class="slick-next slick-arrow" type="button"><i class="fa fa-chevron-right"></i></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    });
  $rootSingle.on("afterChange", function (event, slick, currentSlide) {
    $rootNav.slick("slickGoTo", currentSlide);
    $rootNav.find(".slick-slide.is-active").removeClass("is-active");
    $rootNav
      .find('.slick-slide[data-slick-index="' + currentSlide + '"]')
      .addClass("is-active");
  });

  $rootNav.on("click", ".slick-slide", function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data("slick-index");

    $rootSingle.slick("slickGoTo", goToSingleSlide);
  });
  $(".product-slider-main .product-image").zoom({
    magnify: 0.5,
  });
});

const ham_open = $("#hamburger-open");
const ham_close = $("#hamburger-close");
const navExpand = [].slice.call(document.querySelectorAll(".nav-expand"));
const backLink = `<li class="nav-item">
        <a class="nav-link nav-back-link" href="javascript:;">
          Назад
        </a>
      </li>`;

navExpand.forEach((item) => {
  item
    .querySelector(".nav-expand-content")
    .insertAdjacentHTML("afterbegin", backLink);
  item
    .querySelector(".nav-link")
    .addEventListener("click", () => item.classList.add("active"));
  item
    .querySelector(".nav-back-link")
    .addEventListener("click", () => item.classList.remove("active"));
});
ham_open.click(function () {
  $("#nav-drill").addClass("nav-is-toggled");
});
ham_close.click(function () {
  $("#nav-drill").removeClass("nav-is-toggled");
});

var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки

window.onload = function () {
  tabContent = document.getElementsByClassName("tabContent");
  tab = document.getElementsByClassName("tab");
  hideTabsContent(1);
};

document.getElementById("tabs").onclick = function (event) {
  var target = event.target;
  if (target.className == "tab") {
    for (var i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
};

function hideTabsContent(a) {
  for (var i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
    tab[i].classList.remove("active");
  }
}

function showTabsContent(b) {
  if (tabContent[b].classList.contains("hide")) {
    hideTabsContent(0);
    tab[b].classList.add("active");
    tabContent[b].classList.remove("hide");
    tabContent[b].classList.add("show");
  }
}

// EYE
$(".eye_fiz").on("click", function (e) {
  var t, c;
  e.preventDefault();
  var t = $("#password_fiz").attr("type");
  var c = $(this).find("i").attr("class");
  if (c == "fa fa-eye") {
    $(this).find("i").removeClass("fa-eye");
    $(this).find("i").addClass("fa-eye-slash");
  } else {
    $(this).find("i").addClass("fa-eye");
    $(this).find("i").removeClass("fa-eye-slash");
  }
  if (t == "password") {
    $("#password_fiz").attr("type", "text");
  } else {
    $("#password_fiz").attr("type", "password");
  }
});
$(".eye_iur").on("click", function (e) {
  var t, c;
  e.preventDefault();
  var t = $("#password_iur").attr("type");
  var c = $(this).find("i").attr("class");
  if (c == "fa fa-eye") {
    $(this).find("i").removeClass("fa-eye");
    $(this).find("i").addClass("fa-eye-slash");
  } else {
    $(this).find("i").addClass("fa-eye");
    $(this).find("i").removeClass("fa-eye-slash");
  }
  if (t == "password") {
    $("#password_iur").attr("type", "text");
  } else {
    $("#password_iur").attr("type", "password");
  }
});

//DESCTOP MENU
// const ham_open_dk = $('#desktop-menu');
// const ham_close_dk = $('.overlay-close');
// const navExpand_dk = [].slice.call(document.querySelectorAll('.nav-expand-dk'))
// const backLink_dk = `<li class="nav-item">
//         <a class="nav-link-dk nav-back-link" href="javascript:;">
//           Назад
//         </a>
//       </li>`

// navExpand_dk.forEach(item => {
//     item.querySelector('.nav-expand-content-dk').insertAdjacentHTML('afterbegin', backLink_dk)
//     item.querySelector('.nav-link-dk').addEventListener('click', () => item.classList.add('active'))
//     item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
// })
// ham_open_dk.click(function(){
//     ham_open_dk.addClass('active');
//     $('#nav-drill-desck').addClass('nav-is-toggled');
//     $('.overlay-close').addClass('active');
// })
// ham_close_dk.click(function(){
//     ham_open_dk.removeClass('active');
//     $('#nav-drill-desck').removeClass('nav-is-toggled');
//     $('.overlay-close').removeClass('active');
// });

// Header

// $(window).scroll(function () {
//   var header = $(document).scrollTop();
//   var headerHeight = $('#header').outerHeight();
//   if (header > 0) {
//     $('#header').addClass('fixed');
//   } else {
//     $('#header').removeClass('fixed');
//   }
//   if (header > 250) {
//     $('#header').addClass('in-view');
//   } else {
//     $('#header').removeClass('in-view');
//   }
// });
$(function () {
  $(".vertical-tabs").delegate("li:not(.chosen)", "click", function () {
    $(this)
      .addClass("chosen")
      .siblings()
      .removeClass("chosen")
      .parents(".wrap-vertical-tabs")
      .find(".vertical-tabs-content")
      .hide()
      .eq($(this).index())
      .fadeIn(170);
  });
});
$(document).ready(function () {
  $(".filter-select").select2();
  $(".qty-select .product-qty").select2({
    minimumResultsForSearch: -1,
  });
  $(".qty-select .product-qty-page").select2({});
});
