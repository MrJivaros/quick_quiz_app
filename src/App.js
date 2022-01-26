import { HomeScreen } from './screens/HomeScreen';
import './themes/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QuestionScreen } from './screens/QuestionsScreen';
import { InformationScreen } from './screens/InformationScreen';
import { Provider } from './context/context';
import { ValidationScreen } from './screens/ValidationScreen';
import { ResponseScreen } from './screens/ResponseScreen';

function App() {
	return (
		<Provider>
			<div className='App'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<HomeScreen />} />
						<Route path='/questions' element={<QuestionScreen />} />
						<Route path='/informations' element={<InformationScreen />} />
						<Route path='/validation' element={<ValidationScreen />} />
						<Route path='/result' element={<ResponseScreen />} />
					</Routes>
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
