"use client"
import { signOut, useSession } from "next-auth/react";
import React from "react";

const Pagehome = () => {
  const session = useSession();
  return (
    <>
      {session.status === "loading" ? (
        <p>loading</p>
      ) : (
        <div>
          <button onClick={() => signOut("google")}>Sign out</button>
        </div>
      )}
    </>
  );
};

export default Pagehome;
