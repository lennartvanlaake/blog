import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Nietjouwhomevriend</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About watnou</a>
    </Link>
  </div>
);

export default Header;
