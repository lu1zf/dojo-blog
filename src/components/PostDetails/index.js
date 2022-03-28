import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import './styles.css';

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, error, isPending } = useFetch(`http://localhost:8000/posts/${id}`);
  const history = useHistory();

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/posts/${id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    })
  }

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
          <button onClick={() => { handleDelete(post.id) }}>
            Delete
          </button>
        </article>
      )}
    </div>
  );
}

export default PostDetails;