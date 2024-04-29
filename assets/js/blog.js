const username = document.querySelector("#username");
const title = document.querySelector("#title");
const post = document.querySelector("#post");

    //create cards for html to go to
    //grab form input and riect to cards
    //append to cards
renderBlogPost();

function sharePost(){
    const email = localStorage.getItem('username');
    const title = localStorage.getItem("#title").value;
    const post = localStorage.getItem("#post").value;

if (!email || !title || !post) {
    return;
}
// Create a new blog post object
const blogPost = {
    email,
    title,
    post
};