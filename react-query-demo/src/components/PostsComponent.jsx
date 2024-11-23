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
  // Use the useQuery hook to handle data fetching and caching
  const { data, error, isLoading, isError } = useQuery('posts', fetchPosts );

  const queryClient = useQueryClient();

  const handleRefetch = async () => {
    await queryClient.refetchQueries('posts');
  };

  // Handling loading state
  if (isLoading) {
    return <span>Loading...</span>;
  }
  // Handling Error state
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  // Render the fetched data
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
