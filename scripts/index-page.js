
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

//Parent element
const commentWrapper = document.querySelector(".comment-wrapper");
console.log(commentWrapper);


function renderComments(params) {

	commentWrapper.innerHTML = "";
	comments.forEach((comment) => {
		showComments(comment);
	})
}

renderComments();

comments.push({
	name: "",
	date: "",
	comment: "",
})


// Submit form by pressing the button

const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit",(event) => {
	// stops page from reloading
	event.preventDefault()
	const postName = document.querySelector("form-name");
	const postComment = document.querySelector("form-text");

	if (condition) {
		
	} else {
		
	}

})




/* <form class="form">
	<img src="assets/images/Mohan-muruge.jpg" class="form-image">
	<div class="form-container">
		<label class="form-container__item">NAME</label>
		<input class="form-container__text" type="text" name="name" placeholder="Enter your name"/>

		<label class="form-container__item">COMMENT</label>
		<textarea class="form-container__text" type="text" name="comment" placeholder="Add a new comment"></textarea>

		<button type="submit" class="form-container__button">COMMENT</button>
	</div>
</form> */
// for (let i = 0; i < comments.length; i++) {
// 	showComments(comments[i]);
// }

/*
<div class="comment-section">
	<img class="comment-image" src="assets/images/Photo-gallery-1.jpg">
	<div class="comment-new">
		<h3 class="comment-new__name">Victor Pinto</h3>
		<aside class="comment-new__date">11/02/2023</aside>
		<p class="comment-new__comment">This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.</p>
	</div>		
</div>
<hr>
*/

/* 3 STEPS*/