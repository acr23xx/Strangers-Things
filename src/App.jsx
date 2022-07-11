import { NavBar } from "components";
import Register from "components/Register";
import Login from "components/Login";
import { React, useEffect, useState } from "react";
import { fetchMe } from "api/auth";
import { Posts } from "components";
import { Route, Routes } from "react-router-dom";
import { CreatePost } from "components";
import { fetchPosts } from "./api/apiposts";
import { Logout } from "components";
import "../src/style.css";

function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");

    async function getMe() {
      const result = await fetchMe(localStorageToken);
      console.log("result from fetch me", result);
      setCurrentUser(result.data);
      setToken(localStorageToken);
    }
    if (localStorageToken) {
      getMe();
    }
  }, [token]);

  useEffect(() => {
    const getAllPost = async () => {
      const result = await fetchPosts();
      setPosts(result.data.posts);
    };
    getAllPost();
  }, []);

  return (
    <>
      <NavBar />
      {currentUser?.username ? (
        <h3 className="header">{`${currentUser.username} is logged in.`}</h3>
      ) : (
        <h3 className="header">Log in or Register</h3>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Posts
              setToken={setToken}
              posts={posts}
              setPosts={setPosts}
              currentUser={currentUser}
              token={token}
            />
          }
        />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Login" element={<Login setToken={setToken} />} />
        <Route path="/Register" element={<Register setToken={setToken} />} />
        <Route
          path="/CreatePost"
          element={
            <CreatePost token={token} posts={posts} setPosts={setPosts} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
