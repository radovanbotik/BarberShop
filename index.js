import { handleSidebar } from "./handleSidebar.js";
import { heroSlider } from "./heroSlider.js";
import { navDropdown } from "./navDropdown.js";

const init = () => {
  navDropdown();
  handleSidebar();
  heroSlider();
};

window.addEventListener("DOMContentLoaded", init);
