import './Input.css'

interface IInput {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ state, setState }: IInput) => {
	return (
		<div className="inputStyle">
			<input
				type="text"
				value={state}
				onChange={(e) => setState(e.target.value)}
			/>
		</div>
	);
};

export default Input;