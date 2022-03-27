import './styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog </h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New post</a>
      </div>
    </nav>
  );
}

export default Navbar;