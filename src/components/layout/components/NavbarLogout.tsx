"use client";

import Button from "@/components/ui/Button";
import React from "react";

const NavbarLogout = () => {
  const handleLogout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
    });

    if (res.status === 200) {
      window.location.href = "/";
    }
  };

  return (
    <Button onClick={handleLogout} className="bg-rose-600 hover:bg-rose-700">
      Logout
    </Button>
  );
};

export default NavbarLogout;
