/* ====================================================
   Managing The Loading 
  ===================================================== */
const loading = document.querySelector(".loading");
window.onload = () => {
  loading.classList.add("hide");
  document.body.style.overflowY = "auto";
};

/* ====================================================
   Managing The Change Of The Awards Year 
  ===================================================== */
const awardsYearStart = document.querySelectorAll(".year__awards_start");
const awardsYearEnd = document.querySelectorAll(".year__awards_end");
const nextYearBtns = document.querySelectorAll(".next__year_btn");
const prevYearBtns = document.querySelectorAll(".prev__year_btn");
const yearAwards = document.querySelectorAll(".year__awards");
let year = new Date().getFullYear();
awardsYearStart.forEach((item) => {
  item.innerHTML = getYear("start");
});
awardsYearEnd.forEach((item) => {
  item.innerHTML = getYear("end");
});
yearAwards.forEach((item) => {
  item.innerHTML = (year - 1).toString().substring(2);
});
prevYearBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    year -= 1;
    btn.parentElement.querySelector("p .year__awards_start").innerHTML =
      getYear("start");
    btn.parentElement.querySelector("p .year__awards_end").innerHTML =
      getYear("end");
    btn.parentElement.querySelector(".year__awards").textContent = (year - 1)
      .toString()
      .substring(2);
  });
});
nextYearBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    year += 1;
    btn.parentElement.querySelector("p .year__awards_start").innerHTML =
      getYear("start");
    btn.parentElement.querySelector("p .year__awards_end").innerHTML =
      getYear("end");
    btn.parentElement.querySelector(".year__awards").textContent = (year - 1)
      .toString()
      .substring(2);
  });
});
function getYear(term) {
  if (term === "start") {
    return year.toString().substring(0, 2);
  }
  return year.toString().substring(2);
}

/* ====================================================
   Scrolling Effects Of The Products Section
  ===================================================== */
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 6000,
  },
});

/* ====================================================
   CTA Color Change By Placing In Each Section
  ===================================================== */
const contactLinks = document.querySelectorAll(".contact__info_link");
const about = document.querySelector(".about__section");
const ctaOne = document.querySelector(".cta__one_section");
const ctaTwo = document.querySelector(".cta__two_section");
window.onscroll = () => {
  const topAboutSection = about.getBoundingClientRect().top;
  const bottomAboutSection = about.getBoundingClientRect().bottom;
  const topCtaOneSection = ctaOne.getBoundingClientRect().top;
  const bottomCtaOneSection = ctaOne.getBoundingClientRect().bottom;
  const topCtaTwoSection = ctaTwo.getBoundingClientRect().top;
  const bottomCtaTwoSection = ctaTwo.getBoundingClientRect().bottom;
  contactLinks.forEach((contact) => {
    const topContactLink = contact.getBoundingClientRect().top;
    if (
      (topAboutSection < topContactLink + 10 &&
        bottomAboutSection > topContactLink) ||
      (topCtaOneSection < topContactLink + 10 &&
        bottomCtaOneSection > topContactLink) ||
      (topCtaTwoSection < topContactLink + 10 &&
        bottomCtaTwoSection > topContactLink)
    ) {
      contact.classList.add("white");
    } else {
      contact.classList.remove("white");
    }
  });
};

/* ====================================================
   AOS 
  ===================================================== */
// AOS.init();
document.addEventListener("lazybeforeunveil", function () {
  // AOS Refresh
  // AOS.init();
});

/* ====================================================
   Managing Splides 
  ===================================================== */
// new Splide(".splide__services", {
//   pagination: false,
//   gap: "125px",
//   perPage: 4,
// }).mount();
// new Splide(".splide__products", {
//   pagination: false,
//   gap: "185px",
//   perPage: 3,
// }).mount();
new Splide(".splide__cta", {
  arrows: false,
  pagination: false,
  type: "loop",
  drag: "free",
  perPage: 1,
  autoScroll: {
    speed: 2,
  },
}).mount(window.splide.Extensions);

// new Splide(".splide__projects", {
//   direction: "ttb",
//   height: "590px",
//   arrows: false,
//   pagination: false,
//   wheel: true,
//   autoScroll: false,
//   grid: {
//     rows: 2,
//     cols: 2,
//     gap: {
//       row: "1.5rem",
//       col: "20px",
//     },
//   },
//   breakpoints: {
//     991: {
//       direction: "ltr",
//       height: "auto",
//       grid: {
//         rows: 1,
//         cols: 0,
//         gap: 0,
//       },
//       perPage: 2,
//     },
//     640: {
//       perPage: 1,
//     },
//   },
// }).mount(window.splide.Extensions);

// new Splide(".splide__reviews", {
//   pagination: false,
// }).mount();

// const splideClients = new Splide(".splide__clients", {
//   pagination: false,
//   arrows: false,
//   gap: "125px",
//   perPage: 4,
//   breakpoints: {
//     768: {
//       gap: "50px",
//       perPage: 2,
//     },
//     430: {
//       gap: "20px",
//       perPage: 1,
//     },
//   },
// });
// splideClients.mount();

// ---- services hover handler - in mobile ----

/* ====================================================
   Management Of Service Items On Tablets/Mobile Phones
  ===================================================== */
// const serviceItem = document.querySelectorAll(".services__item");
// const layoutItem = document.querySelector(".item__layout");
// serviceItem.forEach((service) => {
//   let calcTop =
//     service.offsetTop - (layoutItem.offsetHeight - service.offsetHeight);
//   service.setAttribute("data-offset", calcTop);
//   service.addEventListener("click", () => {
//     serviceItem.forEach((service) => service.classList.remove("active"));
//     service.classList.add("active");
//     const title = service.getAttribute("data-title");
//     const href = service.getAttribute("data-href");
//     if (calcTop < 0) calcTop = 0;
//     let offset = service.getAttribute("data-offset");
//     layoutItem.style.top = `${offset}px`;
//     layoutItem.querySelector("p").innerHTML = title;
//     layoutItem.querySelector("a").href = href;
//   });
// });

/* ====================================================
   Mega Menu Management
  ===================================================== */
const navItems = document.querySelectorAll(".nav__item");
const headerContainer = document.querySelector(".header__container");
const megaLinks = document.querySelectorAll(".mega__menu_bottom .left a");
const megaImag = document.querySelector(".mega__menu_bottom .right img");
navItems.forEach((nav) => {
  nav.addEventListener("mouseenter", () => {
    const targetMenu = nav.getAttribute("data-target");
    headerContainer.querySelector(`#${targetMenu}`).classList.add("show");
  });
  nav.addEventListener("mouseleave", () => {
    const targetMenu = nav.getAttribute("data-target");
    headerContainer.querySelector(`#${targetMenu}`).classList.remove("show");
  });
});
megaLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const img = link.getAttribute("data-img");
    megaImag.src = img;
  });
  link.addEventListener("mouseleave", () => {
    megaImag.src = megaImag.getAttribute("data-default");
  });
});

/* ====================================================
   Managing The Toggle Of The Menu On Tablets And Mobiles
  ===================================================== */
// const btnOpenMenu = document.querySelector(".open__menu_mobile");
// const btnCloseMenu = document.querySelector(".close__menu_mobile");
// const mobileMenu = document.querySelector(".responsive__navbar");
// btnOpenMenu.addEventListener("click", () => {
//   mobileMenu.classList.add("show");
// });
// btnCloseMenu.addEventListener("click", () => {
//   mobileMenu.classList.remove("show");
// });

/* ====================================================
    Managing The Toggle Of The Products Submenu On Tablets And Mobiles 
  ===================================================== */
// const productsNavLink = document.querySelector(".nav__products");
// const btnCloseProductsSubMenu = document.querySelector(
//   ".close__products_submenu"
// );
// productsNavLink.addEventListener("click", () => {
//   const target = productsNavLink.getAttribute("data-target");
//   document.querySelector(`.${target}`).classList.add("show");
// });
// btnCloseProductsSubMenu.addEventListener("click", () => {
//   const target = productsNavLink.getAttribute("data-target");
//   document.querySelector(`.${target}`).classList.remove("show");
// });

/* ====================================================
   Managing The Toggle Of The Services Submenu On Tablets And Mobiles
  ===================================================== */
// const servicesNavLink = document.querySelector(".nav__services");
// const btnCloseServicesSubMenu = document.querySelector(
//   ".close__services_submenu"
// );
// servicesNavLink.addEventListener("click", () => {
//   const target = servicesNavLink.getAttribute("data-target");
//   document.querySelector(`.${target}`).classList.add("show");
// });
// btnCloseServicesSubMenu.addEventListener("click", () => {
//   const target = servicesNavLink.getAttribute("data-target");
//   document.querySelector(`.${target}`).classList.remove("show");
// });

/* ====================================================
   Manage The Button To Go To The About Us Section
  ===================================================== */
const scrollButton = document.querySelector(".slide__section_arrow");
scrollButton.addEventListener("click", () => {
  const targetId = scrollButton.getAttribute("data-target");
  const targetEl = document.querySelector(`#${targetId}`);
  targetEl.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

/* ====================================================
   Changing The Cursor When Hovering Over The Service Items In The Mega Menu
  ===================================================== */
const servicesMegaLinks = document.querySelectorAll(".mega__link_service");
servicesMegaLinks.forEach((link) => {
  link.addEventListener("mousemove", (e) => {
    const bound = link.getBoundingClientRect();
    const mouseY = (e.clientY - bound.top).toFixed();
    const mouseX = (e.clientX - bound.left).toFixed();
    const cursorCustome = link.querySelector(".mega__menu_view");
    cursorCustome.classList.add("active");
    document.body.style.cursor = "none";
    cursorCustome.style.top = `${mouseY}px`;
    cursorCustome.style.left = `${mouseX}px`;
  });
  link.addEventListener("mouseout", () => {
    const courserCustome = link.querySelector(".mega__menu_view");
    courserCustome.classList.remove("active");
    document.body.style.cursor = "auto";
  });
});

/* ====================================================
   Changing The Cursor When Hovering Over The Products Items
  ===================================================== */
const productItemImgs = document.querySelectorAll(".products__item div");
productItemImgs.forEach((product) => {
  product.addEventListener("mousemove", (e) => {
    const bound = product.getBoundingClientRect();
    const mouseY = (e.clientY - bound.top).toFixed();
    const mouseX = (e.clientX - bound.left).toFixed();
    const cursorCustome = product.parentNode.querySelector(".product__view");
    cursorCustome.classList.add("active");
    document.body.style.cursor = "none";
    cursorCustome.style.top = `${mouseY}px`;
    cursorCustome.style.left = `${mouseX}px`;
  });
  product.addEventListener("mouseout", () => {
    const courserCustome = product.parentNode.querySelector(".product__view");
    courserCustome.classList.remove("active");
    document.body.style.cursor = "auto";
  });
});

// Projects wrapper cursor
// const projectsWrapper = document.querySelector(".splide__projects");
// projectsWrapper.addEventListener("mousemove", (e) => {
//   const bound = projectsWrapper.getBoundingClientRect();
//   const mouseY = (e.clientY - bound.top).toFixed();
//   const mouseX = (e.clientX - bound.left).toFixed();
//   console.log(mouseX, mouseY);
//   const cursorCustome = projectsWrapper.querySelector(".splide__cursor");
//   cursorCustome.classList.add("active");
//   document.body.style.cursor = "none";
//   cursorCustome.style.top = `${mouseY}px`;
//   cursorCustome.style.left = `${mouseX}px`;
// });
// projectsWrapper.addEventListener("mouseout", () => {
//   const cursorCustome = projectsWrapper.querySelector(".splide__cursor");
//   cursorCustome.classList.remove("active");
//   document.body.style.cursor = "auto";
// });

// Clients wrapper cursor
// const clientsWrapper = document.querySelector(".splide__clients");
// clientsWrapper.addEventListener("mousemove", (e) => {
//   const bound = clientsWrapper.getBoundingClientRect();
//   const mouseY = (e.clientY - bound.top).toFixed();
//   const mouseX = (e.clientX - bound.left).toFixed();
//   const cursorCustome = clientsWrapper.querySelector(".splide__cursor");
//   cursorCustome.classList.add("active");
//   document.body.style.cursor = "none";
//   cursorCustome.style.top = `${mouseY}px`;
//   cursorCustome.style.left = `${mouseX}px`;
// });
// clientsWrapper.addEventListener("mouseout", () => {
//   const cursorCustome = clientsWrapper.querySelector(".splide__cursor");
//   cursorCustome.classList.remove("active");
//   document.body.style.cursor = "auto";
// });

// ---- Search Box Header ----

/* ====================================================
   Search Box Management In Navbar
  ===================================================== */
// const searchBtn = document.querySelector(".open__search");
// const searchBox = document.querySelector(".search__box");
// const navItemsEffect = document.querySelectorAll(".nav__effect");
// const btnBars = document.querySelector(".btn__bars");
// const btnTimes = document.querySelector(".close__search");
// searchBtn.addEventListener("click", () => {
//   searchBox.classList.add("active");
//   if (searchBtn.getAttribute("data-search") === "true") {
//     searchItemHandler("true", searchBox.querySelector("input"));
//   }
//   searchBtn.setAttribute("data-search", "true");
//   btnBars.classList.add("active");
//   btnTimes.classList.add("active");
//   searchBtn.classList.add("active");
//   navItemsEffect.forEach((nav) => nav.classList.add("animate"));
// });
// btnBars.addEventListener("click", () => {
//   disableSearchBoxHandler();
// });
// btnTimes.addEventListener("click", () => {
//   disableSearchBoxHandler();
// });
// function disableSearchBoxHandler() {
//   btnBars.classList.remove("active");
//   btnTimes.classList.remove("active");
//   searchBox.classList.remove("active");
//   searchBtn.setAttribute("data-search", "false");
//   searchItemHandler("false");
//   searchBox.querySelector("input").value = "";
//   searchBtn.classList.remove("active");
//   navItemsEffect.forEach((nav) => nav.classList.remove("animate"));
// }

/* ====================================================
   Search Box Management In Mobile
  ===================================================== */
// const searchBoxMobile = document.querySelector(".search__box_mobile");
// const btnSearchMobile = document.querySelector(".btn__search_mobile");
// btnSearchMobile.addEventListener("click", () => {
//   searchItemHandler("true", searchBoxMobile.querySelector("input"));
// });

/* ====================================================
   Search Item Handler 
  ===================================================== */
const suggestionSearch = document.querySelector(".search__suggestion");
const suggestionSearchItems = document.querySelectorAll(".suggestion__item");
const sections = document.querySelectorAll("section");
function searchItemHandler(state, input) {
  if (state === "true") {
    let sectionClasses = [];
    const title = input.value;
    sections.forEach((section) => {
      if (
        section.textContent.toLowerCase().includes(title.toLowerCase()) &&
        !!title
      ) {
        sectionClasses.push(section.className);
        sections.forEach((section) => {
          section.style.display = "none";
        });
        if (sectionClasses.length > 0) {
          sectionClasses.forEach(
            (sec) => (document.querySelector(`.${sec}`).style.display = "block")
          );
          headerContainer.style.marginBottom = "90px";
          mobileMenu.classList.contains("show")
            ? mobileMenu.classList.remove("show")
            : null;
        }
      }
      if (title === "") {
        sections.forEach((section) => (section.style.display = "block"));
        headerContainer.style.marginBottom = "0";
      }
    });
  } else {
    sections.forEach((section) => (section.style.display = "block"));
    headerContainer.style.marginBottom = "0";
    suggestionSearch.classList.remove("show");
  }
}
window.onkeyup = (e) => {
  if (e.keyCode === 13)
    searchItemHandler("true", searchBox.querySelector("input"));
};
// **** input handler ****
function inputHandler(e) {
  if (e.value === "") {
    sections.forEach((section) => (section.style.display = "block"));
    headerContainer.style.marginBottom = "0";
    suggestionSearch.classList.remove("show");
  } else {
    suggestionSearch.classList.add("show");
    const inputValue = e.value;
    suggestionSearchItems.forEach((suggestion) => {
      if (
        suggestion
          .getAttribute("data-search")
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      ) {
        suggestion.classList.add("show");
      } else {
        suggestion.classList.remove("show");
      }
    });
  }
}

/* ====================================================
   Managing The Display/non-display Of The Request Form
  ===================================================== */
const btnStartPorject = document.querySelector(".btn__start_project");
const requestForm = document.querySelector(".request__form");
function requestFormToggleHandler() {
  requestForm.classList.add("show");
  document.body.style.overflowY = "hidden";
}
btnStartPorject.addEventListener("click", requestFormToggleHandler);

/* ====================================================
   Managing The Display/non-display Of The Contact Form
  ===================================================== */
const btnGetContact = document.querySelector(".btn__get_contact");
const contactContainer = document.querySelector(".contact__container");
btnGetContact.addEventListener("click", openContactFormHandler);
function openContactFormHandler() {
  contactContainer.classList.add("show");
}

/* ====================================================
   Close The Options list By Clicking Outside It
  ===================================================== */
const listOptionsRequestForm = document.querySelector(".select__options");
requestForm.addEventListener("click", (e) => {
  if (
    listOptionsRequestForm.classList.contains("active") &&
    e.target.id !== "select__title"
  ) {
    listOptionsRequestForm.classList.remove("active");
  }
});

/* ====================================================
   Managing Request Form
  ===================================================== */
const selectTitle = document.getElementById("select__title");
const selectTitleMobile = document.getElementById("select__title_mobile");
const selectTitleService = document.getElementById("select__title_service");
const selectTitleDesign = document.getElementById("select__title_design");
const selectListMobile = document.querySelector(".select__options_mobile");
const selectListService = document.querySelector(".select__options_service");
const selectListDesign = document.querySelector(".select__options_design");
const modular = document.getElementById("modular");
const mobileCheck = document.getElementById("mobile__app_check");
const serviceCheck = document.getElementById("web__service_check");
const designCheck = document.getElementById("web__design_check");
const tabBtns = document.querySelectorAll(".btn__tab");
const requestForms = document.querySelectorAll(".form__wrapper");
const selectMobileTabs = document.querySelectorAll(".select__mobile_tab");
const selectProjectOne = document.getElementById("select_project_one");
const selectProjectTwo = document.getElementById("select_project_two");
const btnCloseForm = document.querySelector(".close__form");

(function () {
  if (requestForm.classList.contains("show")) {
    if (!selectProjectOne.checked) {
      selectProjectOne.parentElement.nextElementSibling.classList.add(
        "disabled"
      );
    }
    if (!selectProjectTwo.checked) {
      selectProjectTwo.parentElement.nextElementSibling.classList.add(
        "disabled"
      );
    }
  }
})();

let requestFormData = {
  product: "",
  message: "",
  name: "",
  brandName: "",
  activity: "",
  phoneNumber: "",
  landlinePhoneNumber: "",
  email: "",
  website: "",
  country: "",
  city: "",
};

const nextPageBtn = document.querySelector(".next_page");
function counterCharacters(event) {
  const counterElm = event.parentNode.querySelector(".counter__text");
  const valueLength = event.value.length;
  counterElm.innerHTML = `${valueLength}/1000`;
  requestFormData = { ...requestFormData, message: event.value };
  if (validateFormRequest(valueLength)) {
    nextPageBtn.classList.remove("disable");
  } else {
    nextPageBtn.classList.add("disable");
  }
}
function validateFormRequest(areaLength) {
  if (
    areaLength >= 1 &&
    areaLength <= 1000 &&
    !!requestFormData.product &&
    !!requestFormData.message
  )
    return true;
  return false;
}
btnCloseForm.addEventListener("click", () => {
  requestForm.classList.remove("show");
  document.body.style.overflowY = "auto";
});

const checks = document.querySelectorAll(".check_box");
checks.forEach((check) => {
  check.addEventListener("click", () => {
    const valueLength =
      document.querySelector(".textarea textarea").value.length;
    document.getElementById("select__modular").style.display = "none";
    requestFormData = { ...requestFormData, product: check.value };
    if (validateFormRequest(valueLength)) {
      nextPageBtn.classList.remove("disable");
    } else {
      nextPageBtn.classList.add("disable");
    }
  });
});

selectProjectOne.addEventListener("change", () => {
  if (selectProjectOne.checked) {
    selectProjectOne.parentElement.nextElementSibling.classList.remove(
      "disabled"
    );
    selectProjectTwo.style.opacity = "0.4";
    selectProjectOne.style.opacity = "1";
    selectProjectTwo.nextElementSibling.style.opacity = "0.4";
    selectProjectOne.nextElementSibling.style.opacity = "1";
    selectProjectTwo.parentElement.nextElementSibling.classList.add("disabled");
  }
});
selectProjectTwo.addEventListener("change", () => {
  if (selectProjectTwo.checked) {
    selectProjectTwo.parentElement.nextElementSibling.classList.remove(
      "disabled"
    );
    selectProjectOne.style.opacity = "0.4";
    selectProjectTwo.style.opacity = "1";
    selectProjectOne.nextElementSibling.style.opacity = "0.4";
    selectProjectTwo.nextElementSibling.style.opacity = "1";
    selectProjectOne.parentElement.nextElementSibling.classList.add("disabled");
  }
});

selectTitle.addEventListener("click", () => {
  selectTitle.parentNode
    .querySelector(".select__options")
    .classList.toggle("active");
});
selectTitleMobile.addEventListener("click", () => {
  selectListMobile.classList.toggle("active");
});
selectTitleService.addEventListener("click", () => {
  selectListService.classList.toggle("active");
});
selectTitleDesign.addEventListener("click", () => {
  selectListDesign.classList.toggle("active");
});

function selectHandler(event) {
  selectTitle.innerHTML = event.textContent;
  selectTitle.parentNode
    .querySelector(".select__options")
    .classList.toggle("active");
  requestFormData = { ...requestFormData, product: selectTitle.textContent };
}
function selectMobileProduct(event) {
  selectTitleMobile.innerHTML = event.textContent;
  selectListMobile.classList.toggle("active");
}
function selectServiceProduct(event) {
  selectTitleService.innerHTML = event.textContent;
  selectListService.classList.toggle("active");
}
function selectDesignProduct(event) {
  selectTitleDesign.innerHTML = event.textContent;
  selectListDesign.classList.toggle("active");
}
modular.addEventListener("click", () => {
  disableAllSelectService();
  if (modular.checked) {
    document.getElementById("select__modular").style.display = "block";
  } else {
    document.getElementById("select__modular").style.display = "none";
  }
});
mobileCheck.addEventListener("click", () => {
  disableAllSelectService();
  if (mobileCheck.checked) {
    document.getElementById("select__mobile").style.display = "block";
  } else {
    document.getElementById("select__mobile").style.display = "none";
  }
});
serviceCheck.addEventListener("click", () => {
  disableAllSelectService();
  if (serviceCheck.checked) {
    document.getElementById("select__service").style.display = "block";
  } else {
    document.getElementById("select__service").style.display = "none";
  }
});
designCheck.addEventListener("click", () => {
  disableAllSelectService();
  if (designCheck.checked) {
    document.getElementById("select__design").style.display = "block";
  } else {
    document.getElementById("select__design").style.display = "none";
  }
});
function disableAllSelectService() {
  document.getElementById("select__mobile").style.display = "none";
  document.getElementById("select__design").style.display = "none";
  document.getElementById("select__service").style.display = "none";
}
tabBtns.forEach((tab) => {
  tab.addEventListener("click", () => {
    const formTarget = tab.getAttribute("data-target");
    disableForms();
    document.getElementById(`${formTarget}`).classList.add("active");
    disableTabs();
    tab.classList.add("active");
  });
});
function disableForms() {
  requestForms.forEach((form) => form.classList.remove("active"));
}
function disableTabs() {
  tabBtns.forEach((tab) => tab.classList.remove("active"));
}
selectMobileTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.classList.toggle("selected");
  });
});
const pagesForm = document.querySelectorAll(".page__form");
function goToPage(page) {
  pagesForm.forEach((page) => page.classList.remove("active"));
  document.querySelector(`.page__${page}`).classList.add("active");
}

const inputElems = document.querySelectorAll(".input__el");
const nextPageTwoBtn = document.querySelector(
  ".page__2 .page__buttons .next_page"
);
inputElems.forEach((input) => {
  input.addEventListener("keyup", () => {
    requestFormData = { ...requestFormData, [input.name]: input.value };
    if (validateFormRequestInputs()) {
      nextPageTwoBtn.classList.remove("disable");
    }
  });
});
function selectBoxHandler(e) {
  requestFormData = { ...requestFormData, [e.name]: e.value };
  if (validateFormRequestInputs()) {
    nextPageTwoBtn.classList.remove("disable");
  }
}
function validateFormRequestInputs() {
  if (
    !!requestFormData.name &&
    !!requestFormData.brandName &&
    !!requestFormData.activity &&
    !!requestFormData.phoneNumber &&
    !!requestFormData.landlinePhoneNumber &&
    !!requestFormData.email &&
    !!requestFormData.website &&
    !!requestFormData.country &&
    !!requestFormData.city
  ) {
    return true;
  }
  return false;
}

// ===== form success =====
const formSuccess = document.querySelector(".request__success");
const btnCreateAccount = document.querySelector(".btn__create_account");
const closeSuccessForm = document.querySelector(".close__success_form");
btnCreateAccount.addEventListener("click", () => {
  formSuccess.classList.add("active");
});
closeSuccessForm.addEventListener("click", () => {
  formSuccess.classList.remove("active");
});

/* ====================================================
   Managing Contact Form
  ===================================================== */
const contactForm = document.querySelector(".contact__container");
const btnSubmitContact = document.querySelector(".submit__contact");
const contactFormSuccess = document.querySelector(".contact__success");
const btnCloseContactForm = document.querySelector(".close__contact_form");
btnSubmitContact.addEventListener("click", () => {
  contactFormSuccess.classList.add("show");
  contactForm.querySelector(".contact__items").classList.add("shape");
  contactForm
    .querySelector(".contact__items .contact__right")
    .classList.add("hide");
  contactForm
    .querySelector(".contact__items .contact__left")
    .classList.add("transparent");
  contactFormSuccess.classList.add("transparent");
  contactForm.querySelector(".contact__items").style.height = "100%";
  contactForm.querySelector(".contact__right").style.height = "100%";
});
btnCloseContactForm.addEventListener("click", () => {
  contactForm.classList.remove("show");
  contactFormSuccess.classList.remove("show");
  contactForm.querySelector(".contact__items").classList.remove("shape");
  contactForm
    .querySelector(".contact__items .contact__right")
    .classList.remove("hide");
  contactForm
    .querySelector(".contact__items .contact__left")
    .classList.remove("transparent");
  contactFormSuccess.classList.remove("transparent");
  contactForm.querySelector(".contact__items").style.height = "auto";
  document.body.style.overflowY = "auto";
});
function openRequestFormHandler() {
  requestForm.classList.add("show");
  document.body.style.overflowY = "hidden";
}

/* ====================================================
   Manage The Button To Go To The Top Of The Page
  ===================================================== */
const gotoTopButton = document.querySelector(".goto__top_button");
gotoTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/* ====================================================
   Manage The Language Change
  ===================================================== */
const languageTitle = document.querySelectorAll(".language__title");
const languages = document.querySelectorAll(".languages__list span");
languageTitle.forEach((lang) => {
  lang.addEventListener("click", () => {
    lang.nextElementSibling.classList.toggle("show");
  });
});
languages.forEach((lang) => {
  lang.addEventListener("click", () => {
    lang.parentNode.parentNode.querySelector(".language__title").innerHTML =
      lang.innerHTML;
    lang.parentNode.classList.remove("show");
  });
});


var waves = new SineWaves({
  // Canvas Element
  el: document.getElementById('waves'),

  // General speed of entire wave system
  speed: 1,

  // How many degress should we rotate all of the waves
  rotate: 0,

  // Ease function from left to right
  ease: 'Linear',

  // Specific how much the width of the canvas the waves should be
  // This can either be a number or a percent
  

  // An array of wave options
  waves: [
    {
      timeModifier: 1,   // This is multiplied againse `speed`
      lineWidth: 3,      // Stroke width
      amplitude: 150,    // How tall is the wave
      wavelength: 200,   // How long is the wave
      segmentLength: 20, // How smooth should the line be
      strokeStyle: 'rgba(255, 255, 255, 0.5)', // Stroke color and opacity
      type: 'sine'       // Wave type
    },
    {
      timeModifier: 1,
      lineWidth: 2,
      amplitude: 110,
      wavelength: 100,
      strokeStyle: 'rgba(255, 255, 255, 0.3)'
    },
    {
      timeModifier: 1,   // This is multiplied againse `speed`
      lineWidth: 2,      // Stroke width
      amplitude: 110,    // How tall is the wave
      wavelength: 220,   // How long is the wave
      segmentLength: 20, // How smooth should the line be
      strokeStyle: 'rgba(255, 255, 255, 0.5)', // Stroke color and opacity
      type: 'sine'       // Wave type
    },
    {
      timeModifier: 1,
      lineWidth: 2,
      amplitude: 150,
      wavelength: 120,
      strokeStyle: 'rgba(255, 255, 255, 0.3)'
    },
    {
      timeModifier: 1,   // This is multiplied againse `speed`
      lineWidth: 3,      // Stroke width
      amplitude: 200,    // How tall is the wave
      wavelength: 100,   // How long is the wave
      segmentLength: 20, // How smooth should the line be
      strokeStyle: 'rgba(255, 255, 255, 0.5)', // Stroke color and opacity
      type: 'sine'       // Wave type
    },
    {
      timeModifier: 1,
      lineWidth: 3,
      amplitude: 110,
      wavelength: 80,
      strokeStyle: 'rgba(255, 255, 255, 0.3)'
    }
  ],

  // Perform any additional initializations here
  initialize: function (){},

  // This function is called whenver the window is resized
  resizeEvent: function() {

    // Here is an example on how to create a gradient stroke
    var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
    gradient.addColorStop(0,"rgba(0, 0, 0, 0)");
    gradient.addColorStop(0.5,"rgba(255, 255, 255, 0.2)");
    gradient.addColorStop(1,"rgba(0, 0, 0, 0)");

    var index = -1;
    var length = this.waves.length;
      while(++index < length){
      this.waves[index].strokeStyle = gradient;
    }
  }
});