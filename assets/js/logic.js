let entry = document.getElementById("blogPost");
let submit = document.getElementById("submit");

function getBlogPost(e) {
    e.preventDefault();
    
    let username = document.getElementById("username").value;
    let title = document.getElementById("title").value;
    
    if (username === "" || title === "") {
        alert("Gotta have that info!");
        preventDefault();
    } else {
        alert("Thank you for sharing!");
    }
    window.location.href = "blog.html";
}

submit.addEventListener("click", getBlogPost);

// Get the existing blog posts from local storage
let blogPosts = localStorage.getItem('blogPosts');
if (!blogPosts) {
    // If there are no existing blog posts, create an empty array
    blogPosts = [];
} else {
    // If there are existing blog posts, parse the JSON string into an array
    blogPosts = JSON.parse(blogPosts);
}

// Add the new blog post to the array
blogPosts.push(blogPost);

// Store the updated blog posts array back into local storage
localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

// Call the renderBlogPost function to update the page with the new blog post
renderBlogPost();