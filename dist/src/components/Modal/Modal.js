import ClassToggle from '../../helpers/ClassToggle';
import './Modal.css';

const Modal = ({ isOpened, setIsOpened, children }) => {
	return (
		<div className='modal-container'>
			<div className='modal-box'>
				<button
					onClick={() => {
						ClassToggle('body', 'modalShown');
						setIsOpened(false);
					}}
				>
					❌
				</button>
				<div className='modal-content'>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
