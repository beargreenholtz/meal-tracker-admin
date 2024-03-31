import type { CSSProperties, SVGProps } from 'react';

import icons from '../../../assets/icons';

type TProps = SVGProps<SVGSVGElement> & {
	readonly name: keyof typeof icons;
	readonly className?: string;
	readonly style?: CSSProperties;
	readonly fill?: string;
	readonly stroke?: string;
	readonly onClick?: () => void;
};

const SvgView = (props: TProps) => {
	return (
		<svg
			{...props}
			style={props.style}
			className={props.className}
			fill={props.fill}
			stroke={props.stroke}
			version="1.1"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox={'0 0 ' + icons[props.name][0]}
			dangerouslySetInnerHTML={{ __html: icons[props.name][1] ?? '' }}
			onClick={props.onClick}
		/>
	);
};

export default SvgView;
