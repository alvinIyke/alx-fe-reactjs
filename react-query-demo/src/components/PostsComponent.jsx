import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError } = useQuery(
    'posts', // key
    fetchPosts // function to fetch data
  );

  const queryClient = useQueryClient();

  const handleRefetch = async () => {
    await queryClient.refetchQueries('posts');
  };


  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
       {data.map ((post) => (
        <li key={('https://jsonplaceholder.typicode.com/posts')}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
      </ul>
    </div>
);
};

export default PostsComponent;
