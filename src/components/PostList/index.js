const PostList = ({ posts, title }) => {
  return (
    <div className="post-list">
      <h1>{title}</h1>
      {posts.map(post => (
        <div className="blog-preview" key={post.id}>
          <h2>{post.title}</h2>
          <p>Author: {post.author}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;