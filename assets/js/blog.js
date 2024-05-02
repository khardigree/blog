const storedFormData = JSON.parse(localStorage.getItem('blogPosts')) || [];
const postContainer = document.getElementById("postList");

console.log(storedFormData);


//add eventListener for toggle
function darkMode() {
    event.preventDefault();
    const element = document.body;
    element.classList.toggle("dark-mode");
   
}
document.getElementById("darkModeButton").addEventListener("click", darkMode);

//add eventListener for back button
function goBack() {
    event.preventDefault();
    const element = document.body;
    window.location.href = "index.html";
}
document.getElementById("back").addEventListener("click", goBack);

function renderPosts() {

    let blogs = JSON.parse(localStorage.getItem('blogPosts')) || [];
    

    for (let i = 0; i < blogs.length; i++) {
        let username = blogs[i].username;
        let title = blogs[i].title;
        let post = blogs[i].post;

        let div = document.createElement("div");
        div.innerHTML = `<h2>${username}</h2><h3>${title}</h3><p>${post}</p>`;
        postList.appendChild(div);
    }
}

window.onload = function() {
    postList = document.getElementById("postList");
    renderPosts();
};

