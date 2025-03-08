import React, { useState } from "react";
import { useGetPostsQuery, useGetCommentsQuery } from "./../../../api/dataApi";
import "./PostList.scss";

function PostList() {
  const { data: posts, error } = useGetPostsQuery();
  const [openPostId, setOpenPostId] = useState(null);

  const toggleComments = (postId) => {
    setOpenPostId(openPostId === postId ? null : postId);
  };

  if (error) return <p>Error...</p>;

  return (
    <section className="post-list">
      <div className="container mt-4">
        <h1 className="text-center mb-4">Posts</h1>
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-12">
              <div className="post-card">
                <h3>
                  {post.id}. {post.title}
                </h3>
                <p>{post.body}</p>
                <button
                  className="orange-btn "
                  onClick={() => toggleComments(post.id)}
                >
                  {openPostId === post.id ? "Hide" : "View More"}
                </button>
                {openPostId === post.id && <Comments postId={post.id} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Comments({ postId }) {
  const { data: comments } = useGetCommentsQuery(postId);

  return (
    <ul className="comments-list">
      {comments.map((comment) => (
        <li key={comment.id}>
          <p className="comment-title">{comment.name}</p>
          <p className="comment-body">{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
