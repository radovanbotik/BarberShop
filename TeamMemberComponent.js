const teamElement = document.querySelector("#group-team");

const fetchData = async () => {
  const resp = await fetch("./employees.json");
  const data = await resp.json();
  return data;
};

const TeamMemberComponent = async () => {
  const employees = await fetchData();
  const employeesDOM = employees
    .map(employee => {
      const socials = employee.socials
        .map(social => {
          return `
                 <a href="${social.link}">
                 <svg>
                 <use
                   href="${social.icon}"
                 ></use>
               </svg>
                 </a>
            `;
        })
        .join("");

      return `
    <article class="card">
              <img src="./assets/heros/hero-8.jpg" alt="" class="card__image" />
              <div class="card__header">
                <h2>${employee.employee}</h2>
                <h6>${employee.occupation}</h6>
              </div>
              <div class="card__body">
                <p>
                 ${employee.summary}
                </p>
              </div>
              <div class="card__footer">
                <div class="socials">
                  ${socials}
                </div>
              </div>
            </article>
    `;
    })
    .join("");
  teamElement.innerHTML = employeesDOM;
};

export { TeamMemberComponent };
