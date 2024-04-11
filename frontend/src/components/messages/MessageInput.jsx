import { useState } from "react";
import { BsEmojiSmile, BsFileEarmarkText, BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import FileInputModal from '../modals/FileInputModal'
import './messageInputStyle.css';
import {Row,Col,Container, Button} from 'react-bootstrap'

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();
	const [emojiLoader, _emojiLoader] = useState(false);
	const [fileModal, _fileModal] = useState(false)
	// const [showEmojiPicker, setShowEmojiPicker] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	const handleFileBtn = () => {_fileModal(!fileModal)}

	const handleEmojiBtn = () => {}

	
	return (
		<>
		<form className='px-4 my-3' onSubmit={handleSubmit}>
			<Container className='w-full'>
				<Row className="w-full">
				<Col sm={12}>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				</Col>
				</Row>
				<Row>
				<Col sm={2}>
				<Button type='submit' className='msg-inp-btn'>
					{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
				</Button>
				</Col>
				<Col sm={2}>
				<Button type='button' onClick={handleFileBtn} className='msg-inp-btn'> 
				 	{loading ? <div className='loading loading-spinner'></div>: <BsFileEarmarkText/>}
				</Button>
				</Col>
				<Col sm={2}>
				<Button type='button' className='msg-inp-btn'> 
					{loading ? <div className='loading loading-spinner'></div>: <BsEmojiSmile/>}
				</Button> 
				</Col>
				</Row>
			</Container>
		</form>
		<FileInputModal show={fileModal} />
		</>
	);
};
export default MessageInput;

// STARTER CODE SNIPPET
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
// 	return (
// 		<form className='px-4 my-3'>
// 			<div className='w-full'>
// 				<input
// 					type='text'
// 					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
// 					placeholder='Send a message'
// 				/>
// 				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
// 					<BsSend />
// 				</button>
// 			</div>
// 		</form>
// 	);
// };
// export default MessageInput;
