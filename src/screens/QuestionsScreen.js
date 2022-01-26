import { Button } from '../components/Button';
import { QuizList } from '../components/QuizList';
import { useNavigate } from 'react-router-dom';

export function QuestionScreen() {
	const navigate = useNavigate();
	const onClick = () => {
		navigate('/validation');
	};
	return (
		<div className='container'>
			<QuizList />
			<Button text='Valider' callback={onClick} />
		</div>
	);
}
