import { CustomInputProps } from "../../types";
import S from "./styles.module.css";

export const CustomInput = ({
	inputName,
	labelText,
	defaultValue,
}: CustomInputProps) => {
	return (
		<div className={S.input_box}>
			<label htmlFor={inputName} className={S.label}>
				{labelText}:
			</label>
			<input
				defaultValue={defaultValue}
				id={inputName}
				name={inputName}
				className={S.input}
			/>
		</div>
	);
};
