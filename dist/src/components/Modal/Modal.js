import './Modal.css';

const Modal = ({ isOpened, setIsOpened, children }) => {
	return (
		<div className='modal-container'>
			{/* <div className='modal-box'> */}
				<div className='modal-content'>
					<button onClick={() => setIsOpened(false)}>❌</button>
					{children}
				{/* </div> */}
			</div>
		</div>
	);
};

export default Modal;
