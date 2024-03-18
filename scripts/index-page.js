
const button = document.querySelector(".form-container__button");
const form = document.getElementById("form");
const commentWrapper = document.querySelector(".comment-wrapper");

const currentDate = new Date();

const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const dateString = currentDay + "/" + (currentMonth + 1) + "/" + currentYear;

console.log(dateString);



const comments = [
	{
		name: "Victor Pinto",
		date: "11/02/2023",
		comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
	},
	{
		name: "Christina Cabreba",
		date: "10/28/2023",
		comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
	},
	{
		name: "Isaac Tadesse",
		date: "10/20/2023",
		comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
	},
];

console.log(comments);





function showComments(comment) {
	
	const commentContainer = document.createElement("div");
	commentContainer.classList.add("comment-section");

	const commentImage = document.createElement("img");
	commentImage.classList.add("comment-image");
	commentImage.setAttribute("src", "assets/images/Photo-gallery-1.jpg");
	commentContainer.appendChild(commentImage);

	const pastComment = document.createElement("div");
	pastComment.classList.add("comment-new");
	commentContainer.appendChild(pastComment);

	const nameComment = document.createElement("h3");
	nameComment.classList.add("comment-new-name");
	nameComment.textContent = comment.name;
	pastComment.appendChild(nameComment);

	const dateComment = document.createElement("aside");
	dateComment.classList.add("comment-new__date");
	dateComment.textContent = comment.date;
	pastComment.appendChild(dateComment);

	const newComment = document.createElement("p");
	newComment.classList.add("comment-new__comment");
	newComment.textContent = comment.comment;
	pastComment.appendChild(newComment);

	const line = document.createElement("hr");

	commentWrapper.appendChild(commentContainer);
	commentWrapper.appendChild(line);
}


// Function to render 3 comment on the webpage
function renderComments(numberComments = 3) {

	commentWrapper.innerHTML = "";

	let threeComments = comments.length - numberComments;
	if (threeComments < 0) {
		threeComments = 0;
	}

	for (let i = threeComments; i < comments.length; i++) {
			const comment = comments[i];
			showComments(comment);
	}
}

renderComments(3);


form.addEventListener("submit",(e) => {
	e.preventDefault();

	const commenterName = document.getElementById("form-name").value;
	const commenterComment = document.getElementById("form-text").value;
	

	console.log(commenterName);
	console.log(commenterComment);

	const newComment = {
		name: commenterName,
		date: dateString,
		comment: commenterComment,
	};

	comments.unshift(newComment);
	comments.push(newComment);
	
	renderComments(3);

	document.getElementById("form-name").value = "";
	document.getElementById("form-text").value = "";

});



