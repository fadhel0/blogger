import Link from "next/link";
import { useState, useEffect } from "react";

const Nav = ({ posts }: any) => {
  const [filter, setFilter] = useState("");
  const handlePostClick = () => {
    setFilter("");
  };
  const filteredPosts = filter
    ? posts.filter((post: any) =>
        post.title.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <nav className="px-16 mt-10 flex justify-between items-center flex-wrap">
      <h1 className="text-4xl font-bold text-gray-800 p-4 mx-auto md:mx-0 text-center">
        Sub to Fadhel Web Dev Blog
      </h1>
      <div className="relative mx-auto md:mx-0">
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search"
          className="rounded-lg border-2 border-gray-200 focus:outline-none focus:border-green-600 transition duration-300 ease-in-out px-4 py-2"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />
        {filteredPosts.length > 0 && (
          <div className="flex flex-col absolute bg-white border border-gray-200 rounded-lg mx-auto md:mx:0 mt-2">
            {filteredPosts.map((post: any) => (
              <Link
                href={`/post/${post.number}`}
                key={post.id}
                className="text-gray-800 hover:text-green-600 transition duration-300 ease-in-out px-4 py-2"
                onClick={handlePostClick}
              >
                {post.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
