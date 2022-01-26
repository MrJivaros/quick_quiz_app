import { HomeScreen } from './screens/HomeScreen';
import './themes/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QuestionScreen } from './screens/QuestionsScreen';
import { InformationScreen } from './screens/InformationScreen';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/questions' element={<QuestionScreen />} />
					<Route path='/informations' element={<InformationScreen />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
