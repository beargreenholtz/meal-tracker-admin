import Svg from '../Svg/Svg';

type Props = {
	readonly toggleTheme: VoidFunction;
};

const ThemeController = (props: Props) => {
	const storedTheme = localStorage.getItem('theme');

	return (
		<label className="cursor-pointer grid place-items-center">
			<input
				type="checkbox"
				value="synthwave"
				className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
				checked={storedTheme ? JSON.parse(storedTheme) === 'dark' : false}
				onChange={props.toggleTheme}
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
