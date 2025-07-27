"use client";

import React from "react";

const Logout = () => {
  const handleLogout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
    });

    if (res.status === 200) {
      window.location.href = "/";
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
