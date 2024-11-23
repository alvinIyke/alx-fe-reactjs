import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

// Blog post component with dynamic routing
const BlogPost = () => {
    const { Id } = useParams();
  
    return (
      <div>
        <h1>Blog Post: {Id}</h1>
        <p>This is the blog post page for post {Id}.</p>
      </div>
    );
  };
export default BlogPost;