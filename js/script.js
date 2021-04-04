//PAGE SCROLL
$(document).ready(function () {
  $(".page-scroll").on("click", function (e) {
    //ambil isi href
    let tujuan = $(this).attr("href");

    //tangkap elemen yang dituju
    let elemenTujuan = $(tujuan);

    //pindahkan scroll
    $("html, body").animate(
      {
        scrollTop: elemenTujuan.offset().top - 60,
      },
      1000
    );

    e.preventDefault();
  });

  //SCROLL UP BUTTON
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      $(".scroll-up").css({ opacity: "1", "pointer-events": "auto" });
    } else {
      $(".scroll-up").css({ opacity: "0", "pointer-events": "none" });
    }
  });

  $(".scroll-up").click(function () {
    $("html").animate({ scrollTop: 0 }, 700);
  });
});

//ABOUT SECTION
const btn = document.querySelector(".read-more-btn");

const text = document.querySelector("card_read-more");

const cardHolder = document.querySelector(".card-holder");

cardHolder.addEventListener("click", (e) => {
  const current = e.target;

  const isReadMoreBtn = current.className.includes("read-more-btn");

  if (!isReadMoreBtn) return;

  const currentText = e.target.parentNode.querySelector(".card_read-more");

  currentText.classList.toggle("card_read-more--open");

  current.textContent = current.textContent.includes("penjelasan") ? "tutup" : "penjelasan";
});

const containerGallery = document.querySelector(".gallery-item");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

containerGallery.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 200);
    thumbs.forEach(function (thumb) {
      thumb.className = "thumb";
    });
    e.target.classList.add("shadow");
  }

});

//INFO SECTION
const left = document.querySelector(".left");
const right = document.querySelector(".right");

const slider = document.querySelector(".slider");
const alertInfo = document.querySelector(".alert-info");
const indicatorParent = document.querySelector(".control ul");
const indicators = document.querySelectorAll(".control li");
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    document.querySelector(".control .selected").classList.remove("selected");
    indicator.classList.add("selected");
    slider.style.transform = "translateX(" + i * -25 + "%)";
    index = i;
  });
});

left.addEventListener("click", function () {
  index = index > 0 ? index - 1 : 0;
  document.querySelector(".control .selected").classList.remove("selected");
  indicatorParent.children[index].classList.add("selected");
  slider.style.transform = "translateX(" + index * -25 + "%)";
});

right.addEventListener("click", function () {
  if (index == 4 - 1) {
    alertInfo.classList.remove("alert-info--hide");
    alertInfo.animate(
      [
        { opacity: 0, transform: "translateX(150px)" },
        { opacity: 1, transform: "translateX(-5px)" },
      ],
      {
        duration: 600,
        easing: "ease",
        fill: "forwards",
      }
    );

    alertInfo.classList.add("alert-info--show");
    setTimeout(() => {
      alertInfo.animate(
        [
          { opacity: 1, transform: "translateX(-15px)" },
          { opacity: 0, transform: "translateX(150px)" },
        ],
        {
          duration: 400,
          easing: "ease",
          fill: "forwards",
        }
      );

      alertInfo.classList.add("alert-info--hide");
    }, 3000);
  }
  index = index < 4 - 1 ? index + 1 : 3;
  document.querySelector(".control .selected").classList.remove("selected");
  indicatorParent.children[index].classList.add("selected");
  slider.style.transform = "translateX(" + index * -25 + "%)";
});

//MESSAGES FORM
const submit = document.querySelector('.input-btn > a');
const button = document.querySelector('.input-btn > button');
const liquid = document.querySelector('.input-btn a .liquid');

submit.addEventListener('click', function(e){
e.preventDefault()
});

button.addEventListener('mouseenter',function(){
  liquid.style.top = '-70px';
});

button.addEventListener('mouseleave',function(){
  liquid.style.top ='-38px';
});
