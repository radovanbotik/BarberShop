import { handleSidebar } from "./handleSidebar.js";
import { heroSlider } from "./heroSlider.js";
import { navDropdown } from "./navDropdown.js";
import { testSlider } from "./testSlider.js";
import { SocialMediaComponent } from "./SocialMediaComponent.js";

const init = () => {
  navDropdown();
  handleSidebar();
  heroSlider();
  testSlider();
  SocialMediaComponent();
};

window.addEventListener("DOMContentLoaded", init);
