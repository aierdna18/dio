const botao = document.getElementById('selectorMode');
const h1 = document.getElementById('pageTitle');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkModeClass = 'darkMode';

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    botao.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';
    if(body.classList.contains(darkModeClass)){
        botao.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    botao.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}
botao.addEventListener('click', changeMode)