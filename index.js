import { handleSidebar } from "./handleSidebar.js";
import { heroSlider } from "./heroSlider.js";
import { navDropdown } from "./navDropdown.js";
import { testSlider } from "./testSlider.js";
import { createSocialsList } from "./createSocialsList.js";

const init = () => {
  navDropdown();
  handleSidebar();
  heroSlider();
  testSlider();
  // createSocialsList();
};

window.addEventListener("DOMContentLoaded", init);
