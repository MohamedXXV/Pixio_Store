// ScrollTop
let scrollToTop = document.getElementById("up");
window.onscroll = function () {
  scroll();
};
function scroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
}

//  PopUp
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");
if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}

// Forms Switch
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
signUpButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);
signInButton.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);



