(function () {
  const subMenu = document.querySelectorAll("nav>ul>li>ul");
  const titleMenu = document.querySelectorAll("a.menulink");

  function closeMenu() {
    for (let i = 0; i < subMenu.length; i++) {
      subMenu[i].className = "hide-menu";
    }
  }

  closeMenu();
  for (let i = 0; i < titleMenu.length; i++) {
    titleMenu[i].addEventListener("click", function (evt) {
      evt.preventDefault();

      let contentMenu = this.parentElement.children[1];//Select the ul element is a tag sibling

      if (contentMenu.classList.contains("hide-menu")) {
        closeMenu();
        contentMenu.className = "show-menu";
      } else {
        contentMenu.className = "hide-menu";
      }
    });
  }
})();
