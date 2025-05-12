const scrollRevealOption = {
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".hero-section .hero-info", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1500,
});
ScrollReveal().reveal(".hero-section .title-3", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});
ScrollReveal().reveal(".hero-section .title-4", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});
