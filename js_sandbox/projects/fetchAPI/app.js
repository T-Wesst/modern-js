document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJSON);
document.getElementById("button3").addEventListener("click", getExternal);
// get local text file data
function getText() {
  // fetch returns promises
  fetch("test.txt")
    .then(res => res.text())
    .then(data => {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(err => console.log(err));
}
// get local json data
function getJSON() {
  // fetch returns promises
  fetch("post.json")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = "";
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}
// get from external API
function getExternal() {
  // fetch returns promises
  fetch("https://api.github.com/users")
    .then(res => res.json)
    .then(data => {
      console.log(data);
      let output = "";
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}
