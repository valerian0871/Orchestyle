import { Link } from 'react-router-dom';

const Logo = ({ className = "" }) => (
  <Link to="/" className={`text-[42px] text-[#C19B4C] leading-none ${className}`} style={{ fontFamily: '"Fleur De Leah", cursive' }}>
    Orchestyle
  </Link>
);

export default Logo;
