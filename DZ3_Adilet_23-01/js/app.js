const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabsContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
  tabsContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 3) => {
  tabsContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

let slide = 0;

tabsParent.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (target === item) {
        hideTabContent();
        slide = i;
        showTabContent(slide);
      }
    });
  }
});

const inTerval = () => {
  slide++;
  if (slide > 3) {
    slide = 0;
  }
  hideTabContent();
  showTabContent(slide);
};
setInterval(inTerval, 5000);

const modalTrigger = document.querySelector(".btn_white");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

modalTrigger.addEventListener("click", openModal);

const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

modalCloseBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    closeModal();
  }
});

const body = document.getElementsByTagName("html");
const modalOne = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");
window.addEventListener("scroll", () => {
  if (document.body.clientHeight - body.clientHeight === body.scrollTop) {
    modalOne.style.display = "block";
    document.body.style.overflow = "hidden";
    modalClose.addEventListener("click", () => {
      modalOne.style.display = "none";
      document.body.style.overflow = "visible";
    });
  }
});

function openModalScroll() {
  const page = document.documentElement;

  if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
    openModal();

    window.removeEventListener("scroll", openModalScroll);
  }
}

window.addEventListener("scroll", openModalScroll);
