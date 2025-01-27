import './Input.css'
// import { ICityRDO } from '../../city/city';

export interface IInputProps {
    cityName: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ cityName, setState }: IInputProps) => {
	return (
			<input
				className='inputStyle'
				type="text"
				value={cityName}
				onChange={(e) => setState(e.target.value)}
			/>
	);
};

export default Input;