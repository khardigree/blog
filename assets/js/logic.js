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

