// Init Github
const github = new Github();
// Init UI
const ui = new UI();
// search input
const searchUser = document.getElementById("searchUser");
// search input event listener
searchUser.addEventListener("keyup", e => {
  // get input text
  const userText = e.target.value;
  if (userText !== "") {
    // make http call from github.js
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // show alert from UI.js
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // show profile from UI.js
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
