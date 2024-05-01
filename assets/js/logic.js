//darkmode toggle
function darkMode() {
    event.preventDefault();
    const element = document.body;
    element.classList.toggle("dark-mode");
   
}
document.getElementById("darkModeButton").addEventListener("click", darkMode);


