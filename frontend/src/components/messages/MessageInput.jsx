import { useState } from "react";
import { BsEmojiSmile, BsFileEarmarkText, BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();
	// const [showEmojiPicker, setShowEmojiPicker] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	const FileDropzone = () => {
		const handleChange = (files) => {
		  console.log(files)
		}
		const handleError = (error, file) => {
			console.log('error code ' + error.code + ': ' + error.message)
		  }
	}
	
	return (
		<form className='px-4 my-3' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-4'>
					{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
				</button>
				{/* <button type='button' className='absolute inset-y-0 end-0 flex items-center pe-12'><BsFileEarmarkText/>
				</button>
				<button type='button' className='absolute inset-y-1 end-0 flex items-center pe-20'><BsEmojiSmile/>
				</button> */}
				{/* <button type='button' className='absolute inset-y-0 end-0 flex items-center pe-3'>
				<i class="bi bi-file-earmark-text"></i>
				</button> */}
			</div>
		</form>
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
