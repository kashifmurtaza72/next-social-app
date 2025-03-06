"use client";
//when we have interaction in our website, clicking, submission, if we use states, we need to add "use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RightSidebar() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/${input}`);
  };
  return (
    <>
      <div className="sticky top-0 py-2 bg-white">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            value={input} className="bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}
