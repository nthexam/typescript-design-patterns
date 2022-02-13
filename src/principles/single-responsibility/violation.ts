import fetch from 'axios';
const API_ENDPONT = `https://jsonplaceholder.typicode.com`;
const getPosts = async (userId: number) => {
  try {
    const response = await fetch(`${API_ENDPONT}/users/${userId}/posts`);
    const posts = response.data;
    const cleanedPosts = posts.map((post: any) => {
      delete post['userId'];
      return post;
    });
    return cleanedPosts;
  } catch (e: any) {
    console.log(e);
    throw Error('Error while fetching Posts!');
  }
};

const main = async () => {
  const result = await getPosts(1);
  console.log('result:', result);
};

main();
