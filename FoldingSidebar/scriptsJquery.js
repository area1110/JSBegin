(function ($) {
  "use strict";

  const subMenu = $("nav>ul>li>ul");
  subMenu.hide();

  $("nav>ul>li>a.menulink").click(function () {
    let thisSubMenu = $(this).next("ul");
    subMenu.not(thisSubMenu).hide();
    thisSubMenu.toggle();
  });
})(jQuery);
