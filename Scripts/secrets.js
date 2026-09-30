(function () {
  // 1. protocol counter — counts every .hint-card on the page
  const counter = document.getElementById("proto-count");
  if (counter) counter.textContent = document.querySelectorAll(".hint-card").length;

  // 2. tap to reveal / hide
  document.querySelectorAll(".redacted").forEach((el) => {
    el.addEventListener("click", () => el.classList.toggle("revealed"));
  });
})();