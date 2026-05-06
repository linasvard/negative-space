export function initNav() {
  
  // nav-logik här
const toggleBtn = document.getElementById("toggleHamburgerMenu");
const closeBtn = document.getElementById("closeMobileMenu");
const dropdown = document.querySelector(".mobileTabletDropdown");

toggleBtn.addEventListener("click", () => {
  dropdown.classList.add("open");
  dropdown.setAttribute("aria-hidden", "false");
  toggleBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  dropdown.classList.remove("open");
  dropdown.setAttribute("aria-hidden", "true");
  closeBtn.classList.add("hidden");
  toggleBtn.classList.remove("hidden");
});

}