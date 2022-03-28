import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import './styles.css';

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, error, isPending } = useFetch(`http://localhost:8000/posts/${id}`);

  return (
    <div className="post-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {post && (
        <article>
          <h2>{post.title}</h2>
          <p>Written by: {post.author}</p>
          <div>
            {post.body}
          </div>
        </article>
      )}
    </div>
  );
}

export default PostDetails;