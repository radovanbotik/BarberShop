import { handleSidebar } from "./handleSidebar.js";
import { heroSlider } from "./heroSlider.js";
import { navDropdown } from "./navDropdown.js";
import { testSlider } from "./testSlider.js";
import { SocialMediaComponent } from "./SocialMediaComponent.js";
import { ServicesComponent } from "./ServicesComponent.js";

const init = () => {
  navDropdown();
  handleSidebar();
  heroSlider();
  testSlider();
  SocialMediaComponent();
  ServicesComponent();
};

window.addEventListener("DOMContentLoaded", init);
