import { NavLink, Link } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

function AuthNav() {
  return (
    <div>
      <Link to="/register" style={styles.link}>
        Register
      </Link>
      <NavLink to="/login" exact="true" style={styles.link}>
        Login
      </NavLink>
    </div>
  );
}

export default AuthNav;
