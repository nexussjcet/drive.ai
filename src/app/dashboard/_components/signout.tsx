"use client";

import { signOut } from "next-auth/react";
import React from "react";

const SignoutButton = () => {
  return (
    <div>
      <button
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: "/",
          })
        }
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignoutButton;
