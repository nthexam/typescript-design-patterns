import fetch from 'axios';
const API_ENDPONT = `https://jsonplaceholder.typicode.com`;

const fetchPosts = async (userId: number) => {
  try {
    const response = await fetch(`${API_ENDPONT}/users/${userId}/posts`);
    return response.data;
  } catch (e) {
    handleError(e, 'Error while fetching Posts!');
  }
};

const handleError = (e: any, message: string) => {
  console.log(e);
  throw Error(message);
};

const cleanupPosts = (posts: any) => {
  return posts.map((post: any) => {
    delete post['userId'];
    return post;
  });
};

const main = async () => {
  const posts = await fetchPosts(1);
  console.log(cleanupPosts(posts));
};

main();
