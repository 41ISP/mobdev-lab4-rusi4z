import { PropsWithChildren } from "react";
import './Button.css'

interface IButton extends PropsWithChildren {
	handleClick: any;
	disabled?: boolean;
	type: string;
}

const Button = ({ handleClick, children, disabled }: IButton) => {
	return (
			<button className="buttonStyle" disabled={disabled ?? false} onClick={handleClick}>
				{children}
			</button>
	);
};

export default Button;