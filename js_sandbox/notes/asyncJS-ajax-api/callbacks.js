// hard coded "server"
const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" }
];

/*Synchronous

// took 2 seconds to create post
function createPost(post) {
  setTimeout(function() {
    posts.push(post);
  }, 2000);
}
// took 1 second to get post
function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "post three", body: "this is post three" });
getPosts();
*/

// Asynchronous

// took 2 seconds to create post
function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}
// took 1 second to get post
function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "post three", body: "this is post three" }, getPosts);
