/* ====================================================
   Managing The Loading 
  ===================================================== */
const loading = document.querySelector(".loading");
window.onload = () => {
  // ---- Loading handler ----
  loading.classList.add("hide");
  document.body.style.overflowY = "auto";
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
   Jobs 
   ===================================================== */
const jobId = localStorage.getItem("id-job");
const titleOne = document.querySelector(".title__one");
const titleTwo = document.querySelector(".title__two");
const jobDesc = document.querySelector(".job__desc");
const responsibilityCol = document.querySelector(".responsibilities__col");
const requirementColOne = document.querySelector(".requirements__col_one");
const requirementColTwo = document.querySelector(".requirements__col_two");
const qualificationColOne = document.querySelector(".qualifications__col_one");
const qualificationColTwo = document.querySelector(".qualifications__col_two");
const jobDescText = document.querySelector(".job__desc_text");
const jobs = [
  {
    id: "1",
    title: "Android Developer",
    desc: `We are seeking an experienced and talented Android Developer to join our dynamic team at FutureWaves. As an Android Developer, you will be responsible for developing and maintaining innovative mobile applications for our clients. If you have a passion for creating cutting-edge Android applications and enjoy working in a collaborative and fast-paced environment, this is the perfect opportunity for you.`,
    responsibilities: [
      "Design and develop advanced Android applications using the latest technologies and best practices.",
      " Collaborate with cross-functional teams, including designers and backend developers, to define, design, and ship new features.",
      "Ensure the performance, quality, and responsiveness of applications.",
      "Identify and resolve any bugs or performance issues in a timely manner.",
      " Stay up-to-date with the latest industry trends, techniques, and technologies in Android development.",
    ],
    requirements: [
      "Proven working experience in Android development with a strong portfolio of projects.",
      "Proficient in Java and/or Kotlin programming languages.",
      "Experience with Android SDK, RESTful APIs, and third-party libraries.",
      "Solid understanding of mobile UI/UX principles and best practices.",
      "Familiarity with Git version control and continuous integration tools.",
      "Strong problem-solving and analytical skills.",
      "Excellent teamwork and communication skills.",
    ],
    qualification: [
      "Experience with cross-platform development frameworks such as React Native or Flutter.",
      "Knowledge of backend technologies such as Node.js or PHP.",
      "Familiarity with Agile development methodologies.",
      "Published Android applications on the Google Play Store.",
    ],
    descText: `At FutureWaves, we offer a competitive salary, comprehensive benefits package, and the opportunity to work on exciting projects with a talented team. We value innovation, creativity, and continuous learning, and we provide a supportive and inclusive work environment.

    If you are a skilled Android Developer looking for a new challenge, we would love to hear from you. Apply now with your resume and portfolio to join our team and contribute to the development of cutting-edge mobile applications.
    
    Please note that only candidates selected for an interview will be contacted. Thank you for considering FutureWaves as your next career move.`,
  },
  {
    id: "2",
    title: "IOS Developer",
    desc: "We are currently seeking a skilled and enthusiastic iOS Developer to join our dynamic team at FutureWaves. As an iOS Developer, you will be responsible for designing, developing, and maintaining high-quality iOS applications for our clients. If you have a passion for creating innovative and user-friendly iOS applications and thrive in a collaborative and fast-paced environment, this is an excellent opportunity for you.",
    responsibilities: [
      "Develop and implement cutting-edge iOS applications using the latest technologies and industry best practices.",
      "Collaborate closely with cross-functional teams including designers and backend developers to deliver outstanding app features.",
      "Ensure the performance, quality, and responsiveness of applications.",
      "Identify and resolve any bugs or issues in a timely manner.",
      "Stay updated with the latest trends, techniques, and advancements in iOS development.",
    ],
    requirements: [
      "Proven working experience in iOS development with a strong portfolio of projects.",
      "Proficient in Swift and Objective-C programming languages.",
      "Sound knowledge of iOS SDK, UIKit, and other related frameworks.",
      "Experience working with RESTful APIs and integrating third-party libraries.",
      " Familiarity with version control systems, such as Git.",
      "Strong problem-solving and analytical skills.",
      "Excellent teamwork and communication abilities.",
    ],
    qualification: [
      "Experience with cross-platform development frameworks such as React Native or Flutter.",
      "Knowledge of backend technologies such as Node.js or PHP.",
      "Understanding of Agile development methodologies.",
      "Published iOS applications on the App Store.",
    ],
    descText: `At FutureWaves, we offer a competitive salary, comprehensive benefits package, and the opportunity to work on exciting projects alongside a talented team. We value innovation, creativity, and continuous learning, and we foster a supportive and inclusive work environment.

    If you are a skilled iOS Developer seeking a new challenge, we invite you to apply now with your resume and portfolio. Join our team and contribute to the development of cutting-edge iOS applications.
    
    Please note that only candidates selected for an interview will be contacted. Thank you for considering FutureWaves as your next career destination.`,
  },
];
// const filteredJob = jobs.filter((job) => job.id === jobId);
// titleOne.textContent = filteredJob[0].title;
// titleTwo.textContent = filteredJob[0].title;
// jobDesc.textContent = filteredJob[0].desc;
// filteredJob[0].responsibilities.forEach((responsibity) => {
//   responsibilityCol.insertAdjacentHTML("beforeend", `<li>${responsibity}</li>`);
// });
// filteredJob[0].requirements.forEach((requirement, index) => {
//   if (index % 2 !== 0) {
//   requirementColTwo.insertAdjacentHTML("beforeend", `<li>${requirement}</li>`);
//   } else {
//     requirementColOne.insertAdjacentHTML("beforeend", `<li>${requirement}</li>`);
//   }
// });
// filteredJob[0].qualification.forEach((qualify, index) => {
//   if (index % 2 !== 0) {
//   qualificationColTwo.insertAdjacentHTML("beforeend", `<li>${qualify}</li>`);
//   } else {
//     qualificationColOne.insertAdjacentHTML("beforeend", `<li>${qualify}</li>`);
//   }
// });
// jobDescText.textContent = filteredJob[0].descText;

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

// job request handler
const jobSection = document.querySelector(".job__section");
const jobSuccess = document.querySelector(".job__success");
const btnJobFormSubmit = document.querySelector(".job__form_submit");
btnJobFormSubmit.addEventListener("click", () => {
  jobSection.style.display = "none";
  jobSuccess.style.display = "block";
  jobSuccess.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
function uploadFile(e) {
  const fileName = e.files[0].name;
  const fileTitleElem = e.nextElementSibling.querySelector("span");
  const parentElem = e.parentElement;
  fileTitleElem.innerHTML = fileName;
  fileTitleElem.style.textDecoration = "underline";
  parentElem.nextElementSibling.innerHTML = "ADDED";
}

/* ====================================================
   Managing Request Form
  ===================================================== */
const requestForm = document.querySelector(".request__form");
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
});
btnCloseContactForm.addEventListener("click", () => {
  contactForm.classList.remove("show");
  document.body.style.overflowY = "auto";
});

function openRequestFormHandler() {
  requestForm.classList.add("show");
  document.body.style.overflowY = "hidden";
}

/* ====================================================
   Managing The Display/non-display Of The Request Form
  ===================================================== */
const btnStartPorject = document.querySelector(".btn__start_project");
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
