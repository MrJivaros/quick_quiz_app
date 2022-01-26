import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Text } from '../components/Text';
import { informations } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

export function InformationScreen() {
	const navigate = useNavigate();
	const goToHome = () => {
		navigate('/');
	};
	return (
		<div className='container'>
			<Logo />
			<Text content={informations} />
			<Button text='Retour' callback={goToHome} />
		</div>
	);
}
