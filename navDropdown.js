const headerNavigation = document.querySelector("#header-navigation");
const toggleNavigation = document.querySelector("#toggle-navigation");

const navDropdown = () => {
  toggleNavigation.addEventListener("click", () => {
    headerNavigation.classList.toggle("dropdownActive");
  });
};

export { navDropdown };
