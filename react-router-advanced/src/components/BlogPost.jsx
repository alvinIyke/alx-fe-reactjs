import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// Blog post component with dynamic routing
const BlogPost = () => {
    const { postId } = useParams();
  
    return (
      <div>
        <h1>Blog Post: {postId}</h1>
        <p>This is the blog post page for post {postId}.</p>
      </div>
    );
  };
export default BlogPost;