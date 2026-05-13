const themeToggle = document.querySelector(".theme-toggle");
const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  if (themeToggle) {
    const isDark = theme === "dark";
    themeToggle.textContent = isDark ? "Light" : "Dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
  }
};

setTheme(localStorage.getItem("theme") || "light");

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

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
