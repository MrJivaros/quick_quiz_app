import { createContext, useState } from 'react';
import { questions } from '../constants/constants';

export const appContext = createContext();

export function Provider({ children }) {
	const [userResponse, setResponse] = useState(questions);
	function setUserResponse(questionId, response) {
		let tempResponse = userResponse;
		tempResponse[questionId - 1].goodResponse = response;

		console.log('*********$ user response ', response);
		console.log('*********$ question id ', questionId);
		setResponse(tempResponse);
		console.log(userResponse);
	}
	return (
		<appContext.Provider value={{ userResponse, setUserResponse }}>
			{children}
		</appContext.Provider>
	);
}
