import logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom';
export function Logo() {
	const navigate = useNavigate();
	const goToInformationsScreen = () => {
		navigate('/informations');
		console.log('click');
	};
	return (
		<div className='container'>
			<img
				src={logo}
				alt=' '
				className='rounded mx-auto d-block Image'
				onClick={goToInformationsScreen}
			/>
		</div>
	);
}
