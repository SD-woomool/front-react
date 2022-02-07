import { Link } from "react-router-dom";

function BottomNavigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/community">Community</Link>
      <Link to="/account">Account</Link>
    </div>
  );
}

export default BottomNavigation;
