
import { BandSiteApi } from './band-site-api.js';

const showApi = new BandSiteApi("https://unit-2-project-api-25c1595833b2.herokuapp.com/", "c4ed86e4-2e15-47f8-9a54-9cbadb76c6e6");

const showWrapper = document.querySelector(".show");

function showList(show) {
	
	const showContainer = document.createElement("div");
	showContainer.classList.add("show-info");
	
	const showDateInfo = document.createElement("div");
	showDateInfo.classList.add("show-info__date");
	showContainer.appendChild(showDateInfo);
	
	const showDateLabel = document.createElement("span");
	showDateLabel.classList.add("show-label");
	showDateLabel.textContent = "DATE";
	showDateInfo.appendChild(showDateLabel);
	
	const showDate = document.createElement("span");
	showDate.classList.add("span");
	showDate.textContent = new Date(show.date).toLocaleDateString();
	showDateInfo.appendChild(showDate);
	
	const showVenueInfo = document.createElement("div");
	showVenueInfo.classList.add("show-info__venue");
	showContainer.appendChild(showVenueInfo);
	
	const showVenueLabel = document.createElement("span");
	showVenueLabel.classList.add("show-label");
	showVenueLabel.textContent = "VENUE";
	showVenueInfo.appendChild(showVenueLabel);
	
	const showVenue = document.createElement("span");
	showVenue.classList.add("show-venue");
	showVenue.textContent = show.place;;
	showVenueInfo.appendChild(showVenue);
	
	const showLocInfo = document.createElement("div");
	showLocInfo.classList.add("show-info__loc");
	showContainer.appendChild(showLocInfo);
	
	const showLocLabel = document.createElement("span");
	showLocLabel.classList.add("show-label");
	showLocLabel.textContent = "LOCATION";
	showLocInfo.appendChild(showLocLabel);
	
	const showLoc = document.createElement("span");
	showLoc.classList.add("show-loc");
	showLoc.textContent = show.location;
	showLocInfo.appendChild(showLoc);
	
	const showButton = document.createElement("div");
	showButton.classList.add("show-button");
	showContainer.appendChild(showButton);
	
	const showPurchaseButton = document.createElement("button");
	showPurchaseButton.classList.add("show-button__button");
	showPurchaseButton.textContent = "BUY TICKETS";
	showButton.appendChild(showPurchaseButton);
	
	const line = document.createElement("hr");
	
	showWrapper.appendChild(showContainer);
	showWrapper.appendChild(line);
	
};

//function to take data from api response and display it on the page.

showApi.getShow().then(shows => {
	shows.forEach(show => {
		showList(show);
	});
});

//Active state when click and remove when click others
const showInfo = document.querySelectorAll(".show-info");

showInfo.forEach(showInfoActive => {
	showInfoActive.addEventListener("click", () => {
		document.querySelector(".active")?.classList.remove("active");
		showInfoActive.classList.add("active");
	})
});


const removeLabel = document.querySelectorAll(".show-label");
