import { useContext, useState } from 'react';
import { Text } from '../components/Text';
import { appContext } from '../context/context';
export function Quiz({ response, questionId }) {
	const { setUserResponse } = useContext(appContext);
	let [isCheck, setCheck] = useState(false);
	console.log('********** quiz param', response);

	function setResponse() {
		setCheck(!isCheck);
		console.log(isCheck);
		isCheck
			? setUserResponse(questionId, response.id)
			: setUserResponse(questionId, '');
	}
	return (
		<div className='container Quiz'>
			<div className='form-check'>
				<input
					className='form-check-input'
					type='checkbox'
					checked={isCheck}
					onChange={setResponse}
				/>
				<label className='form-check-label' onClick={setResponse}>
					{response.id}
				</label>
			</div>
			<p> {response.title} </p>
		</div>
	);
}
