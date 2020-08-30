import Link from "next/link";

const Header = () => (
  <div>
    <h2>
      <Link href="/">
        <a>Home</a>
      </Link>
    </h2>
    <h2>
      <Link href="/posts/">
        <a>Posts</a>
      </Link>
    </h2>
    <h2>
      <Link href="/about/">
        <a>About Me</a>
      </Link>
    </h2>
    <h2>
      <Link href="/contact/form">
        <a>Contact</a>
      </Link>
    </h2>
  </div>
);

export default Header;
