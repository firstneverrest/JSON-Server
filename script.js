const url = 'http://localhost:3000/posts';

const getAllPosts = async () => {
  const res = await fetch(url);
  const posts = await res.json();
  console.log(posts);
};

window.addEventListener('DOMContentLoaded', () => getAllPosts());

// const id = new URLSearchParams(window.location.search).get('id');

// const getSinglePost = async () => {
//   const res = await fetch(`${url}/${id}`);
//   const post = await res.json();
//   console.log(post);
// };

// window.addEventListener('DOMContentLoaded', () => getSinglePost());

// const createPost = async () => {
//   const post = {
//     title: 'New World',
//     body: 'A wonder full world cover with dark sky',
//   };

//   console.log(post);

//   await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(post),
//     headers: { 'Content-Type': 'application/json' },
//   });
// };
