import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/apiposts";

import SinglePost from "./SinglePost";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPost = async () => {
      const result = await fetchPosts();
      setPosts(result.data.posts);
    };
    getAllPost();
  }, []);

  // const renderPosts = posts.map((post) => {
  //   return <singlePost post={post} />;
  // });

  // const postID = posts.map.id;

  // const handleClick = async (postID) => {
  //   await delete (localStorage.id, postID);
  // };

  return (
    <div>
      <h1> Posts</h1>
      {posts.map((post, index) => {
        console.log(posts);
        return (
          <h4 key={`Key: ${index}`} post={post}>
            <div>{post.title}</div>
            <div>{post.author.username}</div>
            <div>{post.price}</div>
            <div>{post.description}</div>
            <div>{`Location: ${post.location}`}</div>
            <div>
              {post.willDeliver ? "Will deliver: Yes" : "Will deliver: No"}{" "}
            </div>
          </h4>
        );
      })}
    </div>
  );
}
export default Posts;
