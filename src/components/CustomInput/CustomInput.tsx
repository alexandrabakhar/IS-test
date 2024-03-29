import S from "./styles.module.css";

export const CustomInput = ({
	inputType,
	labelText,
	defaultValue,
}: {
	inputType: "name" | "department" | "company" | "jobTitle";
	labelText: string;
	defaultValue: string;
}) => {
	return (
		<div className={S.input_box}>
			<label htmlFor={inputType} className={S.label}>
				{labelText}:
			</label>
			<input
				defaultValue={defaultValue}
				id={inputType}
				name={inputType}
				className={S.input}
			/>
		</div>
	);
};
