///<reference path="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />

(function ($) {
  "use strict";
  const subMenu = $("nav>ul>li>ul");
  subMenu.hide();

  $("nav>ul>li>a.menulink").click(function () {
    let thisSubMenu = $(this).next("ul");
    subMenu.not(thisSubMenu).hide("slow", "swing");
    thisSubMenu.toggle("slow", "swing");
  });
})(jQuery);