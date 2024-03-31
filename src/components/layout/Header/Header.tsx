import Svg from '../../ui/Svg/Svg';
import ThemeController from '../../ui/ThemeController/ThemeController';

type Props = {
	readonly toggleTheme: VoidFunction;
};

const Header = (props: Props) => {
	return (
		<div className="navbar bg-base-100 px-4 md:px-20 absolute z-20">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<Svg name="hamburger" className="h-5 w-5" stroke="currentColor" />
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<a>Parent</a>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
				<a className="btn btn-ghost text-xl">daisyUI</a>
			</div>

			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<a>Item 1</a>
					</li>
					<li>
						<details>
							<summary>Parent</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<a>Item 3</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end flex gap-3 ">
				<a className="btn btn-neutral">Button</a>
				<ThemeController toggleTheme={props.toggleTheme} />
			</div>
		</div>
	);
};

export default Header;
