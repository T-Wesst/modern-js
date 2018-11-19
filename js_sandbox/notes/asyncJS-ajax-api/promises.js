// hard coded "server"
const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" }
];

function createPost(post) {
  // resolve = is done && reject = throw err
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);
      const error = true;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}
function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
// .then()
createPost({
  title: "post three",
  body: "this is post three"
})
  .then(getPosts)
  .catch(function(err) {
    console.log(err); // logs "Error: Something went wrong"
  });
