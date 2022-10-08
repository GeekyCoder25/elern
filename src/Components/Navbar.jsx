import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { useEffect } from 'react';
import { useRef } from 'react';

export const NavbarIcon = () => {
	return (
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
	);
};
const Navbar = () => {
	const faXmarkRef = useRef();
	const faBars = useRef();
	const ulActive = useRef();
	const overlayRef = useRef();

	const handleHamburger = e => {
		e.target.style.display = 'none';
		faXmarkRef.current.style.display = 'block';
		ulActive.current.classList.add(styles.ulActive);
		overlayRef.current.classList.add(styles.overlayActive);
		setTimeout(() => {
			overlayRef.current.classList.remove(styles.overlayActive);
		}, 500);
	};
	const handleHamburgerClose = e => {
		e.target.style.display = 'none';
		faBars.current.style.display = 'block';
		ulActive.current.classList.remove(styles.ulActive);
		overlayRef.current.classList.add(styles.overlayActive);
		setTimeout(() => {
			overlayRef.current.classList.remove(styles.overlayActive);
		}, 400);
	};
	return (
		<>
			<nav className={styles.nav}>
				<NavbarIcon />
				<ul ref={ulActive}>
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
				<i>
					<i
						className={`fas fa-bars ${styles.fas}`}
						onClick={handleHamburger}
						ref={faBars}
					></i>
					<i
						className={`fas fa-xmark ${styles.fas}`}
						onClick={handleHamburgerClose}
						ref={faXmarkRef}
					></i>
				</i>
			</nav>
			<div className={styles.overlay} ref={overlayRef}>
				<NavbarIcon /> <i className={`fas fa-xmark ${styles.fas}`}></i>
			</div>
		</>
	);
};
export default Navbar;
