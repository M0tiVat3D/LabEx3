import React from "react";

export default function PostCard({ post }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <h3 className="font-semibold text-blue-700">{post.user}</h3>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}
