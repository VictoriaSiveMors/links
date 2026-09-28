(function () {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  // no observer support (very old browsers) -> just show everything
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach((el) => io.observe(el));
})();