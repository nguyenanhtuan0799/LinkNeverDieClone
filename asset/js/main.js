const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const appEl = $(".js-app");
const slideEl = $(".js-slide-item");

function searchTopper() {
  const btnSearchElement = document.querySelector(".js-btn-search");
  const btnCloseSearchElement = document.querySelector(".js-btn-close");
  const headerSearchElement = document.querySelector(".js-header-search");
  const headerSecondarySearchElement =
    document.querySelector(".js-header-second");

  btnSearchElement.addEventListener("click", (e) => {
    headerSecondarySearchElement.classList.toggle("open");
    headerSearchElement.classList.toggle("open");
  });

  btnCloseSearchElement.addEventListener("click", (e) => {
    headerSecondarySearchElement.classList.toggle("open");
    headerSearchElement.classList.toggle("open");
  });
}

function menuSearchBottom() {
  const menuSearch = $(".js-slide-menu");
  const listMenu = $(".js-list-menu");
  const itemMenus = $$(".js-item");

  var isOpen = false;
  menuSearch.onclick = (e) => {
    isOpen = !isOpen;
    listMenu.classList.toggle("open", isOpen);
    e.stopPropagation();
  };

  itemMenus.forEach((itemMenu) => {
    itemMenu.onclick = (e) => {
      e.stopPropagation();
    };
  });
  appEl.onclick = () => {
    listMenu.classList.remove("open", isOpen);
    isOpen = false;
  };
}

function scrollSlideLeft() {
  let startX;
  let isDown = false;
  let scrollLeft;

  slideEl.onmousedown = (e) => {
    isDown = true;
    startX = e.pageX - slideEl.offsetLeft;
    scrollLeft = slideEl.scrollLeft;
  };

  slideEl.onmouseleave = () => {
    isDown = false;
  };
  slideEl.onmouseup = () => {
    isDown = false;
  };

  slideEl.onmousemove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.layerX - slideEl.offsetLeft;
    const walk = (x - startX) * 1;
    slideEl.scrollLeft = scrollLeft - walk;
  };
}

function clickSlide() {
  const slidePage = $$(".slide-page__icon");
  let index = 1;
  const slidePageArr = Array.from(slidePage);

  let a = "0px";
  let b = "-1200px";
  let c = "-2400px";

  slidePageArr[0].onclick = () => {
    slideEl.style = `transform: translate3d(${a}, 0px, 0px); transition: all 1.25s ease 0s;`;
    const slideActive = $(".slide-page__icon.active");

    slidePageArr[0].classList.add("active");
    if (slideActive === slidePageArr[0]) {
      slidePageArr[0].classList.add("active");
    } else {
      slideActive.classList.remove("active");
    }
    index = 1;
  };

  slidePageArr[1].onclick = () => {
    slideEl.style = `transform: translate3d(${b}, 0px, 0px); transition: all 1.25s ease 0s;`;
    const slideActive = $(".slide-page__icon.active");

    slidePageArr[1].classList.add("active");

    if (slideActive === slidePageArr[1]) {
      slidePageArr[1].classList.add("active");
    } else {
      slideActive.classList.remove("active");
    }
    index = 2;
  };

  slidePageArr[2].onclick = () => {
    slideEl.style = `transform: translate3d(${c}, 0px, 0px); transition: all 1.25s ease 0s;`;
    const slideActive = $(".slide-page__icon.active");

    slidePageArr[2].classList.add("active");
    if (slideActive === slidePageArr[2]) {
      slidePageArr[2].classList.add("active");
    } else {
      slideActive.classList.remove("active");
    }
    index = 0;
  };
  function autoScrollSlide() {
    function autoScroll() {
      slidePageArr[index].click();
      if (index === slidePageArr.length) {
        index = 0;
      }
    }

    setInterval(autoScroll, 5000);
  }
  autoScrollSlide();
}

function activeMenu() {
  const gameMenus = $$(".game-container__body-heading");
  const menuGameNew = $(".menu-game__new");
  const menuGameTop = $(".menu-game__top");
  const menuGameUpdate = $(".menu-game__update");
  const menuGameArr = [menuGameNew, menuGameTop, menuGameUpdate];

  const movieMenus = $$(".movie-container__body-heading");
  const menuMovieNew = $(".menu-movie__new");
  const menuMovieTop = $(".menu-movie__top");
  const menuMovieUpdate = $(".menu-movie__update");
  const menuMovieArr = [menuMovieNew, menuMovieTop, menuMovieUpdate];

  gameMenus.forEach((menu, i) => {
    menu.onclick = () => {
      const gameMenuActive = $(".game-container__body-heading.active");
      const menuGameActive = $(".menu-game.active");
      gameMenuActive.classList.remove("active");
      menuGameActive.classList.remove("active");
      menu.classList.add("active");
      menuGameArr[i].classList.add("active");
    };
  });

  movieMenus.forEach((menu, i) => {
    menu.onclick = () => {
      const movieMenuActive = $(".movie-container__body-heading.active");
      const menuMovieActive = $(".menu-movie.active");
      movieMenuActive.classList.remove("active");
      menuMovieActive.classList.remove("active");
      menu.classList.add("active");
      menuMovieArr[i].classList.add("active");
    };
  });
}

function scrollTop() {
  const scrollTop = $(".control-top");
  scrollTop.onclick = (e) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
}

function autoCountView() {
  let view = 56456754;
  let online = 16548;
  const viewCount = $(".footer-list__item-view-desc");
  const onlineCount = $(".footer-list__item-online-desc");

  function autoInsert() {
    viewCount.innerHTML = view;
    onlineCount.innerHTML = online;
    view++;
    online++;
  }

  setInterval(autoInsert, 1000);
}

function sign() {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
}

function hideScroll() {
  const scrollTop = $(".control-top");

  window.onscroll = () => {
    if (window.scrollY === 0) {
      scrollTop.classList.add("hide");
    } else {
      scrollTop.classList.remove("hide");
    }
  };
}

function start() {
  searchTopper();
  menuSearchBottom();
  scrollSlideLeft();
  clickSlide();
  activeMenu();
  scrollTop();
  autoCountView();
  hideScroll();
}

start();
