import { useState } from 'react';
import Register from './components/containers/Auth/Register/Register';
import Header from './components/layout/Header/Header';

function App() {
	const storedTheme = localStorage.getItem('theme');

	const [isThemeToggled, setIsThemeToggled] = useState(
		storedTheme ? JSON.parse(storedTheme) === 'dark' : false,
	);

	const toggleTheme = () => {
		localStorage.setItem('theme', isThemeToggled ? JSON.stringify('light') : JSON.stringify('dark'));
		setIsThemeToggled((prev) => !prev);
	};

	return (
		<div data-theme={isThemeToggled ? 'dark' : 'light'}>
			<Header toggleTheme={toggleTheme} />
			<Register />
		</div>
	);
}

export default App;
