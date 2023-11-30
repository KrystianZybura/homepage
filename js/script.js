{
  const toggleTheme = () => {
    const body = document.querySelector(".js-body");
    const header = document.querySelector(".js-header");
    const footer = document.querySelector(".js-footer");
    if (body && header && footer) {
      body.classList.toggle("body--dark");
      header.classList.toggle("header--dark");
      footer.classList.toggle("footer--dark");
    }
  };
  const toggleThemeName = () => {
    const themeName = document.querySelector(".js-themeName");
    if (themeName) {
      themeName.innerText =
        themeName.innerText === "Ciemny" ? "Jasny" : "Ciemny";
    }
  };
  const onChangeThemeButton = () => {
    toggleTheme();
    toggleThemeName();
  };
  const init = () => {
    const changeThemeButton = document.querySelector(".js-button");
    if (changeThemeButton) {
      changeThemeButton.addEventListener("click", onChangeThemeButton);
    }
  };
  init();
}
