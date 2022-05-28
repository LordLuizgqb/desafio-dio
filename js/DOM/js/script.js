function changeMode() {
    changeclasses();
    changetext();
}

function changeclasses(){
    Button.classList.toggle(darkModeClasses);
    h1.classList.toggle(darkModeClasses);
    body.classList.toggle(darkModeClasses);
    footer.classList.toggle(darkModeClasses);
}

function changetext(){
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode"
    if(body.classList.contains(darkModeClasses)){
        Button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }
    Button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";

}

const darkModeClasses = 'dark-mode'
const Button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


Button.addEventListener('click', changeMode)