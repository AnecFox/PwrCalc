const link = document.getElementById("theme-link");
const themeButton = document.getElementById("theme-button");

const lightTheme = "css/style-light.css";
const darkTheme = "css/style-dark.css";

let currentTheme;

if (localStorage.getItem("theme") === lightTheme) {
    currentTheme = lightTheme;
} else {
    currentTheme = darkTheme;
}
link.setAttribute("href", currentTheme);

themeButton.addEventListener("click", () => {
    if (currentTheme === lightTheme) {
        currentTheme = darkTheme;
    } else {
        currentTheme = lightTheme;
    }
    link.setAttribute("href", currentTheme);
    localStorage.setItem("theme", currentTheme);
})