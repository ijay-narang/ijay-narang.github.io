document.querySelectorAll(".toggle").forEach((button) => {
  const target = document.getElementById(button.dataset.target);
  if (!target) return;

  button.setAttribute("aria-controls", target.id);
  button.setAttribute("aria-expanded", "false");

  button.addEventListener("click", () => {
    const isOpen = target.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
    if (isOpen && window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise([target]);
    }
  });
});
