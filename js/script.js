{
    const toggleTheme = () => {
        const body = document.querySelector(".js-body");
        const header = document.querySelector(".js-header");
        const footer = document.querySelector(".js-footer");

        body.classList.toggle("body--dark");
        header.classList.toggle("header--dark");
        footer.classList.toggle("footer--dark");
    }

    const toggleThemeName = () => {
        const themeName = document.querySelector(".js-themeName");
        themeName.innerText = themeName.innerText === "Ciemny"
            ? "Jasny"
            : "Ciemny";
    }

    const onChangeThemeButton = () => {
        toggleTheme();
        toggleThemeName();
    }

    const init = () => {
        const changeThemeButton = document.querySelector(".js-button");

        changeThemeButton.addEventListener("click", onChangeThemeButton);
    }

    init();
}