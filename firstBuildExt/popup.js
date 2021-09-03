start.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
});

chrome.scripting.executeScript(
  {
    target: { tabId: tab.id },
    func: autoLogin,
  },
  () => {}
);

function autoLogin() {
  "use strict";
  document.querySelector("select#ctl00_mainContent_ddlCampus").value = "3";
  const loginButton = document.querySelector(
    "#loginform .row .col-sm-4 .abcRioButtonContentWrapper"
  );
  window.setTimeout(function () {
    loginButton.click();
  }, 3000);
}
