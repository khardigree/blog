let entry = document.getElementById("blogPost");
let submit = document.getElementById("submit");


const blogs = JSON.parse(localStorage.getItem('blogPosts')) || [];

function getBlogPost(e) {
    e.preventDefault();
    
    let username = document.getElementById("username").value;
    let title = document.getElementById("title").value;
    let post = document.getElementById("post").value;

    const formData = {
        username: username,
        title: title,
        post: post
    };
    
    
    if (username === "" || title === "") {
        alert("Gotta have that info!");
        preventDefault();
    } else {
        alert("Thank you for sharing!");
    }
    blogs.push(formData);
    saveFormData(blogs);
    window.location.href = "blog.html";
    
}

submit.addEventListener("click", getBlogPost);

 
function saveFormData(formData) {
    localStorage.setItem('blogPosts', JSON.stringify(formData));

}
