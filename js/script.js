const menu = document.querySelector('.header__toggle');
const menuLinks = document.querySelector('.header__list');
const body = document.querySelector('body');

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
    // document.body.classList.toggle('_lock')
}

menu.addEventListener('click', mobileMenu);


const closeMenu = () => {
  menu.classList.remove('is-active')
  menuLinks.classList.remove('active')
}

menuLinks.addEventListener('click', closeMenu);





const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight /  animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight /  animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}




var imageSlider = new Swiper(".main-section__swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  keyboard: {
      enabled: true,
  },
});






var imageSlider = new Swiper(".menu-main__swiper", {
  effect: "coverflow",
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  keyboard: {
      enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});





var interiorSwiper = new Swiper(".interior__swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      type: 'progressbar',
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
  });




  var reviewsSwiper = new Swiper(".about__swiper", {
    effect: "coverflow",
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
    },
  });