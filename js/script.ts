{
  const toggleTheme = (): void => {
    const body: HTMLElement | null = document.querySelector(".js-body");
    const header: HTMLElement | null = document.querySelector(".js-header");
    const footer: HTMLElement | null = document.querySelector(".js-footer");

    if (body && header && footer) {
      body.classList.toggle("body--dark");
      header.classList.toggle("header--dark");
      footer.classList.toggle("footer--dark");
    }
  };

  const toggleThemeName = (): void => {
    const themeName: HTMLElement | null =
      document.querySelector(".js-themeName");

    if (themeName) {
      themeName.innerText =
        themeName.innerText === "Ciemny" ? "Jasny" : "Ciemny";
    }
  };

  const onChangeThemeButton = (): void => {
    toggleTheme();
    toggleThemeName();
  };

  const init = (): void => {
    const changeThemeButton = document.querySelector(".js-button");

    if (changeThemeButton) {
      changeThemeButton.addEventListener("click", onChangeThemeButton);
    }
  };

  init();
}
