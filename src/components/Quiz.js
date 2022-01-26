import { Text } from '../components/Text';
export function Quiz({ response }) {
	return (
		<div className='container Quiz'>
			<div className='form-check'>
				<input
					className='form-check-input'
					type='radio'
					name='flexRadioDefault'
					id='flexRadioDefault1'
				/>
				<label className='form-check-label'>{response.id}</label>
			</div>
			<Text content={response.title} />
		</div>
	);
}
