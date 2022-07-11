import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newPost } from "api/apiposts";

function CreatePost({ token }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await newPost({ price, description, title, willDeliver }, token);
          navigate("/Posts");
        }}
      >
        <input
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          value={price}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          value={location}
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />{" "}
      </form>
      <span>
        <label>Will Deliver</label>
        <input
          checked={willDeliver}
          type={"checkbox"}
          onChange={(e) => setWillDeliver(e.target.checked)}
        />
      </span>
      <button type="submit">Create</button>
    </div>
  );
}

export default CreatePost;
