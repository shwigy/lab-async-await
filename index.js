// Write your code here!

// fetch data from API using async/await
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
 
  // convert the response to JSON
  const posts = await response.json();
 
  displayPosts(posts);
}

// display posts, receives the array of posts as a parameter
function displayPosts(posts) {
  const postList = document.getElementById("post-list");
 
  // loop through the posts list
  posts.forEach((post) => {
 
    // create a new li tag 
    const li = document.createElement("li");
 
    // create a new h1 tag 
    const h1 = document.createElement("h1");
    h1.textContent = post.title;
 
    // create a new p tag
    const p = document.createElement("p");
    p.textContent = post.body;
 
    // append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);
 
    // append li to the ul#post-list
    postList.appendChild(li);
  });
}
fetchPosts();

// I personally need to improve on this concept, I believe for this instance, there is definitely room for improvement
// to keep it simple, im unsure of my mastery in this