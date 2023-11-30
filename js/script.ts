{
  const toggleTheme = (): void => {
    const body = document.querySelector(".js-body") as HTMLElement | null;
    const header = document.querySelector(".js-header") as HTMLElement;
    const footer = document.querySelector(".js-footer") as HTMLElement | null;

    if (body && header && footer) {
      body.classList.toggle("body--dark");
      header.classList.toggle("header--dark");
      footer.classList.toggle("footer--dark");
    }
  };

  const toggleThemeName = (): void => {
    const themeName = document.querySelector(
      ".js-themeName"
    ) as HTMLElement | null;

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
    const changeThemeButton = document.querySelector(
      ".js-button"
    ) as HTMLElement | null;

    if (changeThemeButton) {
      changeThemeButton.addEventListener("click", onChangeThemeButton);
    }
  };

  init();
}
