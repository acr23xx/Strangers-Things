import React from "react";

function SinglePost({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <ul>
        <li>{post.description}</li>
        <li>{post.price}</li>
        <li>{post.location}</li>
        <li>{post.willDeliver}</li>
      </ul>
    </div>
  );
}

export default SinglePost;
