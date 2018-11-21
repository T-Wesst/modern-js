/* in search bar: find user by username
fetch profile
fetch user details [company, website, location, member since, recent repos with link, public repos num, public gists num, followers num, following num]
for each recent repo fetch [stars, watchers, forks]
*/

// on keypress get user data
document.getElementById("searchUser").addEventListener("keydown", getUser);

function getUser() {
  // create XHR object
  const xhr = new XMLHttpRequest();
  // get request
  xhr.open("GET", "https://api.github.com/users", true);
  xhr.onload = function() {
    if (this.status === 200) {
      // parse JSON
      const response = JSON.parse(this.responseText);
      debugger;
      console.log(response); // returns Array of objects
      console.log(response[0]); // returns JS object at index 0
      console.log(response[0].login); // returns username
    }
  };
  xhr.send();
}
