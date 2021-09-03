(function(){
    'use strict';
    const location = document.querySelector("select#ctl00_mainContent_ddlCampus");
    location.value = '3';
    const loginButton = document.querySelector("#loginform .row .col-sm-4 .abcRioButtonContentWrapper");
    window.setTimeout(function(){loginButton.click();}, 3000);
})();