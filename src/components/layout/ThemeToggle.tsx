"use client";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      className="btn btn-ghost btn-circle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      🌗
    </button>
  );
}
