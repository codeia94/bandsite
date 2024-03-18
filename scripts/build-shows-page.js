const showWrapper = document.querySelector(".show");

console.log(showList);


const shows = [
	{
		date: "Mon Sept 09 2024",
		venue: "Ronald Lane",
		location: "San Francisco, CA",
	},
	{
		date: "Tue Sept 17 2024",
		venue: "Pier 3 East",
		location: "San Francisco, CA",
	},
	{
		date: "Sat Oct 12 2024",
		venue: "View Lounge",
		location: "San Francisco, CA",
	},
	{
		date: "Sat Nov 16 2024",
		venue: "Hyatt Agency",
		location: "San Francisco, CA",
	},
	{
		date: "Fri Nov 29 2024",
		venue: "Moscow Center",
		location: "San Francisco, CA",
	},
	{
		date: "Wed Dec 18 2024",
		venue: "Press Club",
		location: "San Francisco, CA",
	},
];

console.log(shows);


function showList(show) {
	
	const showContainer = document.createElement("div");
	showContainer.classList.add("show-info");

	//Show Dates
	const showDateInfo = document.createElement("div");
	showDateInfo.classList.add("show-info__date");
	showContainer.appendChild(showDateInfo);

	const showDateLabel = document.createElement("span");
	showDateLabel.classList.add("show-label");
	showDateLabel.textContent = "DATE";
	showDateInfo.appendChild(showDateLabel);
	
	const showDate = document.createElement("span");
	showDate.classList.add("span");
	showDate.textContent = show.date;
	showDateInfo.appendChild(showDate);

	//Show venue
	const showVenueInfo = document.createElement("div");
	showVenueInfo.classList.add("show-info__venue");
	showContainer.appendChild(showVenueInfo);

	const showVenueLabel = document.createElement("span");
	showVenueLabel.classList.add("show-label");
	showVenueLabel.textContent = "VENUE";
	showVenueInfo.appendChild(showVenueLabel);

	const showVenue = document.createElement("span");
	showVenue.classList.add("show-venue");
	showVenue.textContent = show.venue;
	showVenueInfo.appendChild(showVenue);


	//Show location
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

	//Show Button
	const showButton = document.createElement("div");
	showButton.classList.add("show-button");
	showContainer.appendChild(showButton);

	const showPurchaseButton = document.createElement("button");
	showPurchaseButton.classList.add("show-button__button");
	showPurchaseButton.textContent = "BUY TICKETS";
	showButton.appendChild(showPurchaseButton);

	const line = document.createElement("hr");

	//Append to parent
	

	showWrapper.appendChild(showContainer);
	showWrapper.appendChild(line);

	
};

shows.forEach(showList);



//Active state when click and remove when click others
const showInfo = document.querySelectorAll(".show-info");

showInfo.forEach(showInfoActive => {
	showInfoActive.addEventListener("click", () => {
		document.querySelector(".active")?.classList.remove("active");
		showInfoActive.classList.add("active");
	})
});


const removeLabel = document.querySelectorAll(".show-label");
