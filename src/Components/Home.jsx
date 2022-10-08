import styles from '../styles/Home.module.css';
import landingImage from '../images/profile.png';
import institutes from '../images/institutes.jpg';
import exploreImg from '../images/explore1.jpg';
import { cards } from '../data/db';
import { explores } from '../data/db';
import { Link } from 'react-router-dom';
const Home = () => {
	return (
		<>
			<header className={styles.header}>
				<section>
					<h1>Get help with coding from engineers.</h1>
					<p>
						Elearn is a Global training provider based across the UK that
						specialise in accredited and bespoke training courses. We crush the
						barriers to getting a degree.
					</p>
					<button>Explore Courses</button>
				</section>
				<img src={landingImage} alt="landing" />
			</header>
			<main className={styles.main}>
				<div className={styles.img}>
					<img src={institutes} alt="institutes" className={styles.imgInst} />
				</div>
				<form className={styles.form}>
					<div className={styles.input}>
						<span>
							<i className="fas fa-search"></i>
							<input
								type="text"
								name="course"
								id="course"
								placeholder="Course Name"
							/>
						</span>
						<span>
							<i className="fas fa-user"></i>
							<input
								type="text"
								name="courstutore"
								id="tutor"
								placeholder="Tutor Name"
							/>
						</span>
						<button>
							<i className="fas fa-search"></i>Search
						</button>{' '}
					</div>
					<div className={styles.select}>
						<i className="fas fa-eye"></i>
						<select name="courses" id="courses" defaultValue="index">
							<option value="index" disabled>
								Popular Courses
							</option>
							<option value="html">HTML</option>
							<option value="css">CSS</option>
							<option value="javascript">Javasript</option>
							<option value="React">React</option>
							<option value="Next">Next</option>
							<option value="Node">Node.js</option>
							<option value="Express">Express</option>
							<option value="MongoDB">MongoDB</option>
						</select>
					</div>
				</form>
				<article className={styles.cards}>
					{cards &&
						cards.map(card => (
							<section key={card._id} className={styles.card}>
								<div>
									<i className={`fas fa-${card.fas}`}></i>
									<h2>{card.title}</h2>
									<p>${card.price}</p>
								</div>
								<div>
									<i className="fas fa-play-circle"></i>
									<span>{card.video} videos</span>
									<i className="fas fa-star"></i>
									<span>{card.review}k reviews</span>
								</div>
								<button>Join Now</button>
							</section>
						))}
				</article>
				<div className={styles.cardLoadMoreContainer}>
					<button className={styles.cardLoadMore}>Load More Courses</button>
				</div>
				<article className={styles.why}>
					<div>
						<img src={landingImage} alt="why" />
					</div>
					<aside>
						<h2>Why we Learn from Elearn</h2>
						<p>
							Elearn is a Global training provider based across the UK that
							specialises in accredited and bespoke training courses. We crush
							the barriers to getting a degree.
						</p>
						<div>
							<span>
								<i className="fas fa-circle-check"></i>
								Word-class
							</span>
							<span>
								<i className="fas fa-circle-check"></i>
								Flexible
							</span>
							<span>
								<i className="fas fa-circle-check"></i>
								Affordable
							</span>
							<span>
								<i className="fas fa-circle-check"></i>
								Job-relevant
							</span>
						</div>
					</aside>
				</article>
				<article className={styles.explore}>
					<h2>Explore Company Courses</h2>
					<p>
						Elearn is a Global training provider based across the UK that
						specialises in accredited and bespoke training courses. We crush the
						barriers to getting a degree.
					</p>
					<section>
						{explores &&
							explores.map(explore => (
								<div key={explore._id}>
									<img src={exploreImg} alt="" />
									<div>
										<h2>{explore.title}</h2>
										<p>{explore.content} Courses</p>
									</div>
								</div>
							))}
					</section>
					<button>Explore All Courses</button>
				</article>
				<article className={styles.subscribe}>
					<h2>Subscribe To Get Update For Every New Courses</h2>
					<p>
						Elearn is a Global training provider based across the UK that
						specialises in accredited.
					</p>
					<form>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Enter your email"
						/>
						<button>Subscribe</button>
					</form>
				</article>
			</main>
			<footer className={styles.footer}>
				<section>
					<div>
						<h2>Elearn</h2>
						<li>
							<Link to="/">About</Link>
						</li>
						<li>
							<Link to="/">What we Offer</Link>
						</li>
						<li>
							<Link to="/">Leadership</Link>
						</li>
						<li>
							<Link to="/">Careers</Link>
						</li>
						<li>
							<Link to="/">Catalog</Link>
						</li>
						<li>
							<Link to="/">For enterprise</Link>
						</li>
					</div>
					<div>
						<h2>Courses</h2>
						<li>
							<Link to="/">Classrom courses</Link>
						</li>
						<li>
							<Link to="/">Virtual classroom courses</Link>
						</li>
						<li>
							<Link to="/">E-learning courses</Link>
						</li>
						<li>
							<Link to="/">Video Courses</Link>
						</li>
						<li>
							<Link to="/">Offline Courses</Link>
						</li>
					</div>
					<div>
						<h2>Community</h2>
						<li>
							<Link to="/">Learners</Link>
						</li>
						<li>
							<Link to="/">Parteners</Link>
						</li>
						<li>
							<Link to="/">Developers</Link>
						</li>
						<li>
							<Link to="/">Transactions</Link>
						</li>
						<li>
							<Link to="/">Blog</Link>
						</li>
						<li>
							<Link to="/">Teaching Center</Link>
						</li>
					</div>
					<div>
						<h2>Quick links</h2>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/">Professional Education</Link>
						</li>
						<li>
							<Link to="/">Courses</Link>
						</li>
						<li>
							<Link to="/">Transactions</Link>
						</li>
						<li>
							<Link to="/">Admissions</Link>
						</li>
						<li>
							<Link to="/">Testimonial</Link>
						</li>
						<li>
							<Link to="/">Programs</Link>
						</li>
					</div>
					<div>
						<h2>More</h2>
						<li>
							<Link to="/">Press</Link>
						</li>
						<li>
							<Link to="/">Investors</Link>
						</li>
						<li>
							<Link to="/">Terms</Link>
						</li>
						<li>
							<Link to="/">Privacy</Link>
						</li>
						<li>
							<Link to="/">Help</Link>
						</li>
						<li>
							<Link to="/">Contact</Link>
						</li>
					</div>
				</section>
				<small>
					<h2 className={styles.logo}>
						<i className={`fas fa-book ${styles.faBook}`}></i>
						<span>E</span>
						<span>l</span>
						<span style={{ color: '#85d1a0', borderBottom: '3px solid' }}>
							e
						</span>
						<span>r</span>
						<span>n</span>
					</h2>
					<p>&copy; 2022 Elearn @ Geeky Coder. All Right Reserved</p>
					<aside className={styles.footerSub}>
						<div className={styles.socials}>
							<p>
								<i className="fab fa-facebook"></i>
							</p>
							<p>
								<i className="fab fa-twitter"></i>
							</p>
							<p>
								<i className="fab fa-instagram"></i>
							</p>
							<p>
								<i className="fab fa-youtube"></i>
							</p>
							<p>
								<i className="fab fa-linkedin"></i>
							</p>
						</div>
					</aside>
				</small>
			</footer>
		</>
	);
};
export default Home;
