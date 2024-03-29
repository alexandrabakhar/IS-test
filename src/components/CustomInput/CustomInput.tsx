import { useEffect } from "react";
import { setIsDataChanged } from "../../redux/slices/user";
import { useAppDispatch } from "../../redux/store";
import { CustomInputProps } from "../../types";
import S from "./styles.module.css";
import { debounce } from "lodash";

export const CustomInput = ({
	inputName,
	labelText,
	defaultValue,
}: CustomInputProps) => {
	const dispatch = useAppDispatch();

	const dispatchDataChanged = debounce((isChanged: boolean) => {
		dispatch(setIsDataChanged(isChanged));
	}, 300);

	const onChange: React.FormEventHandler<HTMLInputElement> = (event) => {
		const { value } = event.currentTarget;

		dispatchDataChanged(value !== defaultValue);
	};
	useEffect(() => {
		return () => {
			dispatchDataChanged.cancel();
		};
	}, []);
	return (
		<div className={S.input_box}>
			<label htmlFor={inputName} className={S.label}>
				{labelText}:
			</label>
			<input
				onChange={onChange}
				defaultValue={defaultValue}
				id={inputName}
				name={inputName}
				className={S.input}
			/>
		</div>
	);
};
