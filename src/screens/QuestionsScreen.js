import { Button } from '../components/Button';
import { QuizList } from '../components/QuizList';

export function QuestionScreen() {
	const onClick = () => {};
	return (
		<div className='container'>
			<QuizList />
			<Button text='Valider' callback={onClick} />
		</div>
	);
}
