import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  const parkInfoLinks = [
    {
      name: "Current Conditions ›",
      link: "conditions.html",
      image: data.images[2].url,
      description:
        "See what conditions to expect in the park before leaving on your trip!"
    },
    {
      name: "Fees and Passes ›",
      link: "fees.html",
      image: data.images[3].url,
      description: "Learn about the fees and passes that are available."
    },
    {
      name: "Visitor Centers ›",
      link: "visitor_centers.html",
      image: data.images[9].url,
      description: "Learn about the visitor centers in the park."
    }
  ];

  // --- Park Info Cards ---
  function parkInfoCard(item) {
    return `
      <div class="park-info-card">
        <img src="${item.image}" alt="${item.name}">
        <div class="park-info-text">
          <a href="${item.link}"><h3>${item.name}</h3></a>
          <p>${item.description}</p>
        </div>
      </div>
    `;
  }

  function renderParkInfo(links) {
    const container = document.querySelector(".info");
    container.innerHTML = links.map(parkInfoCard).join("");
  }

  renderParkInfo(parkInfoLinks);

  // --- Footer ---
  function getMailingAddress(addresses) {
    return addresses.find((address) => address.type === "Mailing");
  }

  function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
  }

  function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);

    return `<section class="contact">
      <h3>Contact Info</h3>
      <h4>Mailing Address:</h4>
      <div>
        <p>${mailing.line1}</p>
        <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
      </div>
      <h4>Phone:</h4>
      <p>${voice}</p>
    </section>`;
  }

  function renderFooter(info) {
    const container = document.querySelector("footer");
    container.innerHTML = footerTemplate(info);
  }

  renderFooter(data);

  // --- Page metadata ---
  document.querySelector("head > title").textContent = data.fullName;
  document.querySelector(".hero-image img").src = data.images[0].url;
}

setHeaderInfo(parkData);
