{
    const toggleTheme = () => {
        const body = document.querySelector(".js-body");
        const header = document.querySelector(".js-header");
        const footer = document.querySelector(".js-footer");

        body.classList.toggle("body--dark");
        header.classList.toggle("header--dark");
        footer.classList.toggle("footer--dark");
    }
    const buttonTextChange = () => {
        const buttonText = document.querySelector(".js-buttonText");
        buttonText.innerText = buttonText.innerText === "Ciemny"
            ? "Jasny"
            : "Ciemny";
    }

    const ChangeThemeButton = () => {
        toggleTheme();
        buttonTextChange();
    }

    const init = () => {
        const changeThemebutton = document.querySelector(".js-button");
        changeThemebutton.addEventListener("click", ChangeThemeButton);
    }

    init();
}