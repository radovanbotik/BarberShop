import { formatPrice } from "./formatPrice.js";

const servicesList = document.querySelector("#list-of-services");

const fetchData = async () => {
  const resp = await fetch("./services.json");
  const data = resp.json();
  return data;
};

const ServicesComponent = async () => {
  const services = await fetchData();
  const servicesDOM = services
    .map(service => {
      return `
    <li class="list-item list-item-group service">
        <h4>
                <span class="service-name">${service.service}</span>
                <span class="service-price" id='service-price'>${service.price}</span>
        </h4>
        <h6 class="service-details">
                ${service.details}
        </h6>
    </li>
    `;
    })
    .join("");
  servicesList.innerHTML = servicesDOM;
  const prices = [...servicesList.querySelectorAll("#service-price")];
  prices.forEach(price => {
    price.textContent = formatPrice(price.textContent);
  });
};

export { ServicesComponent };
