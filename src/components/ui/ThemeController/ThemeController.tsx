import Svg from '../Svg/Svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/app';
import * as authActions from '@/store/actions/auth';
import { useAppDispatch } from '@/hooks/redux';

const ThemeController = () => {
	const dispatch = useAppDispatch();

	const themeType = useSelector((state: RootState) => state.user.themeType);

	const toggleTheme = () => {
		dispatch(authActions.toggleTheme(themeType));
	};

	return (
		<label className="cursor-pointer grid place-items-center">
			<input
				type="checkbox"
				value="dark"
				className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
				checked={themeType === 'dark' ? true : false}
				onChange={toggleTheme}
			/>

			<Svg
				name="dark"
				className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
				stroke="currentColor"
				width="14"
				height="14"
			/>

			<Svg
				name="light"
				className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
				stroke="currentColor"
				width="14"
				height="14"
			/>
		</label>
	);
};

export default ThemeController;
