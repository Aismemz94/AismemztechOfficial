/* Parallax hero zoom */
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const heroBg = document.querySelector(".hero-bg");

  heroBg.style.transform = `scale(${1.2 + scrollY * 0.0005})`;
});

/* Reveal on Scroll */
function revealElements() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

/* Mouse Depth Effect */
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 50;
  const y = (window.innerHeight / 2 - e.pageY) / 50;
  document.querySelector(".hero-content").style.transform =
    `translate(${x}px, ${y}px)`;
});
