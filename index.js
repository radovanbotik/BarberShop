import { handleSidebar } from "./handleSidebar.js";
import { heroSlider } from "./heroSlider.js";
import { navDropdown } from "./navDropdown.js";
import { testSlider } from "./testSlider.js";

const init = () => {
  navDropdown();
  handleSidebar();
  heroSlider();
  testSlider();
};

window.addEventListener("DOMContentLoaded", init);
