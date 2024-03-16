
const button = document.querySelector(".form-container__button");
// const commenterName = document.getElementById("#name");
// const commenterComment = document.getElementById("#comment");
const form = document.getElementById("form");
const commentWrapper = document.querySelector(".comment-wrapper");



//Array of objects
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


function renderComments() {

	commentWrapper.innerHTML = "";
	comments.forEach((comment) => {
		showComments(comment);
	})
}

//function to showcomments 
function showComments(comment) {
	
	const commentContainer = document.createElement("div");
	//2a. add any classes/attributes
	commentContainer.classList.add("comment-section");

	
	//2b. add any content
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

	//3. append to parent 
	commentWrapper.appendChild(commentContainer);
	commentWrapper.appendChild(line);
}


form.addEventListener("submit",(e) => {
	e.preventDefault();

	const commenterName = document.querySelector(".form-name").value;
	const commenterComment = document.querySelector(".form-text").value;

	console.log(commenterName);
	console.log(commenterComment);

	const newComment = {
		name: commenterName,
		comment: commenterComment,
	};

	comments.push(newComment);

	renderComments();

	document.querySelector(".form-name").value = "";
	document.querySelector(".form-text").value = "";

});

renderComments();


//Parent element
// const commentWrapper = document.querySelector(".comment-wrapper");

// console.log(commentWrapper);



// function renderComments() {

// 	commentWrapper.innerHTML = "";
// 	comments.forEach((comment) => {
// 		showComments(comment);
// 	})
// }


// console.log(commentWrapper);

