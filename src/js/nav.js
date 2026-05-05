export function initNav() {
  
  // nav-logik här
const toggleBtn = document.getElementById("toggleHamburgerMenu");
const closeBtn = document.getElementById("closeMobileMenu");
const dropdown = document.querySelector(".mobileTabletDropdown");

toggleBtn.addEventListener("click", () => {
  dropdown.classList.remove("hidden");
  toggleBtn.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
  dropdown.classList.add("hidden");
  toggleBtn.classList.remove("hidden");
});

}