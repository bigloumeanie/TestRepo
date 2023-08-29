import { START_LOADING, END_LOADING, FETCH_ALL, FETCH_POST, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';
import * as api from '../api/index.js';

// Define your action creators as before...

// Example of using the action creators in a component
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/posts'; // Assuming this is the file where your action creators are defined

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    // Dispatch the getPosts action when the component mounts
    dispatch(getPosts(1)); // You can provide the desired page number
  }, [dispatch]);

  // Render your component with the fetched posts
  return (
    <div>
      {/* Render posts */}
    </div>
  );
}

export default PostList;
