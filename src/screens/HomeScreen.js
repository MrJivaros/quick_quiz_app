import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Text } from '../components/Text';
import { terms, text } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

export function HomeScreen() {
	const navigate = useNavigate();
	const onClick = (e) => {
		navigate('/questions');
	};

	return (
		<div>
			<Logo />
			<Text content={text} />
			<Button callback={onClick} text='Participer' />
			<Text content={terms} />
		</div>
	);
}
