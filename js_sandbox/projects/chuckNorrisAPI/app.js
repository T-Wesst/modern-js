// grab button and event listener
document.querySelector(".get-jokes").addEventListener("click", getJokes);

// get Jokes
function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  // xhr ajax request
  const xhr = new XMLHttpRequest();
  // fetch multiple random jokes from API
  xhr.open("get", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if (this.status === 200) {
      // parse JSON string to object
      const response = JSON.parse(this.responseText);
      let output = "";
      if (response.type === "success") {
        // loop through response array and append
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += `<li>Something went wrong</li>`;
      }
      document.querySelector(".jokes").innerHTML = output;
    }
  };

  xhr.send();
  e.preventDefault();
}
