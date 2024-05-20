var thumb_hero = new Swiper(".thumb-slide-hero", {
  slidesPerView: 5,
  direction: "vertical",
  spaceBetween: 20,
  watchSlidesProgress: true
});

const progressSlide = document.querySelector('.js-progress');

var slide_hero = new Swiper(".slide-hero", {
  effect: "fade",
  thumbs: {
    swiper: thumb_hero,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  on: {
    init: function () {
      progressSlide.classList.remove('animate');
      progressSlide.classList.remove('active');
      progressSlide.classList.add('animate');
      progressSlide.classList.add('active');
    },
    slideChangeTransitionStart: function () {
      progressSlide.classList.remove('animate');
      progressSlide.classList.remove('active');
      progressSlide.classList.add('active');
    },
    slideChangeTransitionEnd: function () {
      progressSlide.classList.add('animate');
    }
  }
});

const btnLogar = document.getElementById('js-btn-logar');
const btnClose = document.getElementById('js-btn-close-modal');

btnLogar.addEventListener('click', () => {
  document.documentElement.classList.add('open-modal');
})

btnClose.addEventListener('click', () => {
  document.documentElement.classList.remove('open-modal');
})


const btnMenu = document.querySelectorAll('.js-btn-menu');
const menu = document.querySelectorAll('.js-menu');

btnMenu.forEach((btn, index) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();

    menu.forEach(item => {
      item.classList.remove('active');

      item.addEventListener('mouseleave', () => {
        menu.forEach(itemBtn => {
          itemBtn.classList.remove('active');
        })
        btnMenu.forEach(itemBtn => {
          itemBtn.classList.remove('active');
        })
      })
    })


    btnMenu.forEach(itemBtn => {
      itemBtn.classList.remove('active');
    })

    btn.classList.add('active');
    menu[index].classList.toggle('active');
  })
})

const catGames = document.querySelectorAll('.js-cat-games a');
const tabGames = document.querySelectorAll('.tab-pane');

catGames.forEach((btn, index) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();

    catGames.forEach(item => {
      item.classList.remove('active');
    })


    tabGames.forEach(tab => {
      tab.classList.remove('active');
    })

    btn.classList.add('active');
    tabGames[index].classList.add('active');
  })
})


