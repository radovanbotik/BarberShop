const socialMediaLists = [
  ...document.querySelectorAll("[data-id=social-media-list]"),
];

const fetchData = async () => {
  const resp = await fetch("./socialMediaPlat.json");
  const data = await resp.json();
  return data;
};

const createSocialsList = async () => {
  const socialMedia = await fetchData();
  const socialMediaDOM = socialMedia
    .map(entry => {
      return `
    <li>
    <span class="icon">
    <object type='image/svg+xml' data='${entry.icon}' class='icon'>
    </object>
    </span>
    <span>${entry.platform}</span>
  </li>
    `;
    })
    .join("");
  console.log(socialMediaDOM);
  socialMediaLists.forEach(list => {
    list.innerHTML = socialMediaDOM;
  });
};

export { createSocialsList };
