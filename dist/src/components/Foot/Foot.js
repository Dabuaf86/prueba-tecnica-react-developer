import './Foot.css';
import './facebook-white.svg';
import { ReactComponent as Facebook } from '../../assets/social/facebook-white.svg';
import { ReactComponent as Twitter } from '../../assets/social/twitter-white.svg';
import { ReactComponent as Ig } from '../../assets/social/instagram-white.svg';
import { ReactComponent as Apple } from '../../assets/store/app-store.svg';
import { ReactComponent as Play } from '../../assets/store/play-store.svg';
import { ReactComponent as MS } from '../../assets/store/windows-store.svg';

const Foot = () => {
	return (
		<footer className='footer'>
			<div className='foot-div'>
				<button className='foot-nav'> Home</button>
				<hr />
				<button className='foot-nav'> Terms and Conditions</button>
				<hr />
				<button className='foot-nav'> Privacy Policy</button>
				<hr />
				<button className='foot-nav'> Collection Statement</button>
				<hr />
				<button className='foot-nav'> Help</button>
				<hr />
				<button className='foot-nav'> Manage Account</button>
			</div>
			<div className='copyright-cont'>
				<p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
			</div>
			<div className='svg-cont'>
				<span className='social-content'>
					<button>
						<Facebook className='social-svg' />
					</button>
					<button>
						<Twitter className='social-svg' />
					</button>
					<button>
						<Ig className='social-svg' />
					</button>
				</span>
				<span className='store-cont'>
					<button>
						<Apple className='store-svg' />
					</button>
					<button>
						<Play className='store-svg' />
					</button>
					<button>
						<MS className='store-svg' />
					</button>
				</span>
			</div>
		</footer>
	);
};

export default Foot;
