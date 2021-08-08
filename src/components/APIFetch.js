import React, { useState, useEffect } from "react";
// import axios from "axios";

const APIFetch = () => {
  const [posts, setPosts] = useState([]);
  const [id, setid] = useState(1);
  const [clicked, setClicked] = useState(false);

  const handlerClicked = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    //   setPosts(res.data);
    // });
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setid(e.target.value)} />
      <br />
      <button type="button" onClick={handlerClicked}>
        Get post
      </button>
      <br />
      {posts.title}
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default APIFetch;
