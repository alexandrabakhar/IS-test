import React from "react";
import { CustomInput } from "../CustomInput/CustomInput";
import S from "./styles.module.css";
import { useAppSelector } from "../../redux/store";

import { changeUserData } from "../../api/changeUserData";

type FormFields = {
	name: HTMLInputElement;
	department: HTMLInputElement;
	company: HTMLInputElement;
	jobTitle: HTMLInputElement;
};
export const UserEditForm = () => {
	const {
		name: initName,
		department: initDepartment,
		company: initCompany,
		jobTitle: initJobTitle,
		id,
		index,
	} = useAppSelector((state) => state.currentUser);

	const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (
		event
	) => {
		event.preventDefault();
		const form = event.currentTarget;

		const { name, department, company, jobTitle } = form;

		const changedUserData = {
			...(name.value !== initName && {
				name: name.value,
			}),
			...(company.value !== initCompany && {
				company: company.value,
			}),
			...(department.value !== initDepartment && {
				department: department.value,
			}),
			...(jobTitle.value !== initJobTitle && {
				jobTitle: jobTitle.value,
			}),
		};

		changeUserData(index, changedUserData);
	};

	return (
		<div className={S.user_edit_form}>
			<h3 className={S.user_header}>{initName}</h3>
			<form className={S.user_form} onSubmit={handleSubmit} key={id}>
				<CustomInput
					defaultValue={initName}
					inputType="name"
					labelText="Имя"
				/>
				<CustomInput
					defaultValue={initDepartment}
					inputType="department"
					labelText="Отдел"
				/>
				<CustomInput
					defaultValue={initCompany}
					inputType="company"
					labelText="Компания"
				/>
				<CustomInput
					defaultValue={initJobTitle}
					inputType="jobTitle"
					labelText="Должность"
				/>
				<button className={S.button} type="submit">
					Отправить
				</button>
			</form>
		</div>
	);
};
