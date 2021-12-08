document
  .getElementById("register-form")
  .addEventListener("keypress", function (event) {
    if (event.code == "Enter") {
      event.preventDefault();
    }
  });
let scrollToTopBtn = document.querySelector(".totop");
let rootElement = document.documentElement;
function handleScroll() {
  let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.2) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}
function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
