import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({ setToken, setCurrentUser }) {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    setToken(null);
    setCurrentUser(null);
    navigate("./components/HomePage");
  });

  return;
}
