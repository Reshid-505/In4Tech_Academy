const swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  cssMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
});

swiper.on("slideChange", () => {
  document.querySelectorAll(".dot").forEach((dot) => {
    dot.classList.remove("dot-active");
  });

  const activeSlide = document.querySelector(".slider-dots");
  if (activeSlide) {
    const dots = activeSlide.querySelectorAll(".dot");
    const activeIndex = swiper.realIndex % dots.length;
    if (dots[activeIndex]) {
      dots[activeIndex].classList.add("dot-active");
    }
  }
});
