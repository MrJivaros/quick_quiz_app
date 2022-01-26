export function Button({ text, callback }) {
	return (
		<button className='btn btn-success Btn' onClick={callback}>
			{text}
		</button>
	);
}
