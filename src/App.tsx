import AppRouter from './app.router';
import { useAppSelector } from './hooks/redux';

function App() {
	const themeType = useAppSelector((state) => state.user.themeType);

	return (
		<div data-theme={themeType}>
			<AppRouter />
		</div>
	);
}

export default App;
