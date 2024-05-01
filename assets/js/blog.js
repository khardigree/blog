const storedFormData = JSON.parse(localStorage.getItem('blogPosts')) || [];
const postContainer = document.getElementById("post");

console.log(storedFormData);

// Create a new form data object
let newFormData = {
    username: $("#username").val(),
    title: $("#title").val(),
    post: $("#post").val(),
};

const user = storedFormData.username;
const title = storedFormData.title;
const post = storedFormData.post;

const blogPost ={
    user, 
    title, 
    post,
}

postContainer.textContent = `User: ${blogPost.user}, Title: ${blogPost.title}, Post: ${blogPost.post}`;

function saveFormData(formData) {
    storedFormData.push(formData);
    if (Array.isArray(storedFormData)) {
        storedFormData.forEach(data => {
            let newPost = document.createElement("div");
            newPost.textContent = `User: ${data.username}, Title: ${data.title}, Post: ${data.post}`;
            postContainer.appendChild(newPost);
        });
    }
}



// if (Array.isArray(storedFormData)) {
//     storedFormData.forEach(data => {
//         let newPost = document.createElement("div");
//         newPost.textContent = `User: ${data.username}, Title: ${data.title}, Post: ${data.post}`;
//         postContainer.appendChild(newPost);
//     });
// }


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