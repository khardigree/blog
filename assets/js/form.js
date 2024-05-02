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



// function renderPosts() {

//     let blogs = JSON.parse(localStorage.getItem('blogPosts')) || [];
    

//     for (let i = 0; i < blogs.length; i++) {
//         let username = blogs[i].username;
//         let title = blogs[i].title;
//         let post = blogs[i].post;

//         let div = document.createElement("div");
//         div.innerHTML = `<h2>${username}</h2><h3>${title}</h3><p>${post}</p>`;
//         postList.appendChild(div);
//     }
// }

// window.onload = function() {
//     postList = document.getElementById("postList");
//     renderPosts();
// };


