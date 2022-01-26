import { questions } from '../constants/constants';
import { Quiz } from './Quiz';

export function QuizList() {
	return (
		<div className='container QuizList'>
			{questions.map((question) => (
				<div key={question.id}>
					<h2> {question.question} </h2>
					{question.responses.map((response, index) => (
						<Quiz response={response} questionId={question.id} key={index} />
					))}
				</div>
			))}
		</div>
	);
}
