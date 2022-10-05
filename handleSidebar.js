const closeSidebarBtn = document.querySelector("#close-sidebar");
const openSidebarBtn = document.querySelector("#open-sidebar");

const handleSidebar = () => {
  openSidebarBtn.addEventListener("click", () => {
    document.body.classList.add("sidebarActive");
    console.log("hi");
  });
  closeSidebarBtn.addEventListener("click", () => {
    document.body.classList.remove("sidebarActive");
  });
};

export { handleSidebar };
