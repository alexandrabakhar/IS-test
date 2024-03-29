import { CustomInput } from "../CustomInput/CustomInput";
import S from "./styles.module.css";
import { useAppSelector } from "../../redux/store";

import { useFormSubmit } from "../../hooks/useFormSubmit";

export const UserEditForm = () => {
	const { name, department, company, jobTitle, id, index, isDataChanged } = useAppSelector(
		(state) => state.currentUser
	);
	const { changeData } = useFormSubmit();

	const handleChangeData = changeData({
		name,
		department,
		company,
		jobTitle,
		index,
		id,
	});

	return (
		<div className={S.user_edit_form}>
			<h3 className={S.user_header}>{name}</h3>
			<form className={S.user_form} onSubmit={handleChangeData} key={id}>
				<CustomInput
					defaultValue={name}
					inputName="name"
					labelText="Имя"
				/>
				<CustomInput
					defaultValue={department}
					inputName="department"
					labelText="Отдел"
				/>
				<CustomInput
					defaultValue={company}
					inputName="company"
					labelText="Компания"
				/>
				<CustomInput
					defaultValue={jobTitle}
					inputName="jobTitle"
					labelText="Должность"
				/>
				<button disabled={!isDataChanged} className={S.button} type="submit">
					Отправить
				</button>
			</form>
		</div>
	);
};
