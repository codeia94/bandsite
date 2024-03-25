import { BandSiteApi } from "./band-site-api.js";

const commentApi = new BandSiteApi("https://unit-2-project-api-25c1595833b2.herokuapp.com/", "c4ed86e4-2e15-47f8-9a54-9cbadb76c6e6");

const button = document.querySelector(".form-container__button");
const form = document.getElementById("form");
const commentWrapper = document.querySelector(".comment-wrapper");

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
	dateComment.textContent = new Date(comment.timestamp).toLocaleDateString();
	pastComment.appendChild(dateComment);

	const newComment = document.createElement("p");
	newComment.classList.add("comment-new__comment");
	newComment.textContent = comment.comment;
	pastComment.appendChild(newComment);

	const line = document.createElement("hr");

	commentWrapper.prepend(commentContainer);
	commentWrapper.prepend(line);
}


renderComments(3);

let comments = [];

//TEST CODE
async function renderComments() {
	const comments = await commentApi.getComment();
	commentWrapper.innerHTML = "";
	comments.forEach((comment) => {
		showComments(comment);
	});
}


//Event listener for the form
form.addEventListener("submit",async (e) => {
	e.preventDefault();

	const commenterName = document.getElementById("form-name").value;
	const commenterComment = document.getElementById("form-text").value;
	const currentDate = new Date();
	const timestamp = currentDate.getTime();

	const newComment = {
		name: commenterName,
		comment: commenterComment,
		date: timestamp,
	};

	try {
		await commentApi.postComment(newComment);
	} catch (error) {
		console.error("ERRRRRRRROR");
	}

	comments.unshift(newComment);
	
	renderComments();
	document.getElementById("form-name").value = "";
	document.getElementById("form-text").value = "";

});