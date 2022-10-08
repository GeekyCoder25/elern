import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<h2 className={styles.logo}>
				<i
					className="fas fa-book"
					style={{ color: '#6255a4', marginRight: '10px' }}
				></i>
				<span style={{ color: '#6255a4' }}>E</span>
				<span style={{ color: '#85d1a0' }}>l</span>
				<span style={{ color: '#85d1a0', borderBottom: '4px solid' }}>e</span>
				<span style={{ color: '#6255a4' }}>r</span>
				<span style={{ color: '#6255a4' }}>n</span>
			</h2>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/">Programs</Link>
				</li>
				<li>
					<Link to="/">Professional Education</Link>
				</li>
				<li>
					<Link to="/">Courses</Link>
				</li>
				<li>
					<Link to="/">Testimonials</Link>
				</li>
				<li className={styles.login}>
					<Link to="/signin">Log in</Link>
				</li>
				<li>
					<Link to="/signup">Registration</Link>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
