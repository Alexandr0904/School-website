gsap.registerPlugin(ScrollTrigger);
gsap.from(".header__top", {
  duration: 1,
  opacity: 0,
  y: "-100%",
});
gsap.from(".header__text", {
  duration: 1,
  opacity: 0,
  y: "100%",
});
gsap.from(".header__title", {
  duration: 1,
  opacity: 0,
  y: "100%",
  delay: 1,
});
gsap.from(".header__subtitle", {
  duration: 1,
  opacity: 0,
  y: "100%",
  delay: 2,
});
gsap.from(".header__btn-2", {
  duration: 1,
  opacity: 0,
  y: "100%",
  delay: 3,
});
gsap.from(".box__mini", {
  duration: 1,
  opacity: 0,
  x: "100%",
  scrollTrigger: ".box",
  // ! scrollTrigger- когда доходим до элемента анимация срабатывает
  stagger: 0.5,
});
gsap.from(".max__img", {
  duration: 1,
  opacity: 0,
  x: "-100%",
  scrollTrigger: ".max__object",
});
gsap.from(".max__sentence", {
  duration: 1,
  opacity: 0,
  x: "100%",
  scrollTrigger: ".max__object",
});
gsap.from(".fun__item", {
  duration: 1,
  opacity: 0,
  x: "100",
  scrollTrigger: ".fun__body",
});
gsap.from(".teacher__item", {
  duration: 1,
  opacity: 0,
  x: "-100%,",
  scrollTrigger: ".teacher__body",
  stagger: 0.5,
});
gsap.from(".team__item", {
  duration: 1,
  opacity: 0,
  x: "100%",
  scrollTrigger: ".team__body",
  stagger: 0.5,
});
gsap.from(".form__body", {
  duration: 1,
  opacity: 0,
  scale: 0,
  scrollTrigger: ".form__body",
  rotate: "360deg",
});
gsap.from(".info__body", {
  duration: 1,
  opacity: 0,
  scale: 0,
  scrollTrigger: ".info__body",
});
gsap.from(".footer", {
  duration: 1,
  opacity: 0,
  scrollTrigger: ".footer",
  y: "100%",
});
