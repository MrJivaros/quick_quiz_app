import { questions } from '../constants/constants';

export function ResponseScreen() {
	return (
		<div className='container'>
			<ul>
				{questions.map((question) => (
					<li>
						{question.question}
						{}
					</li>
				))}
			</ul>
		</div>
	);
}
