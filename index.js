// Write your code here!

// fetch data from API using async/await
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
 
  // convert the response to JSON
  const posts = await response.json();
 
  displayPosts(posts);
}