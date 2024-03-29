import React from "react";
import { CustomInput } from "../CustomInput/CustomInput";
import S from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setCurrentUserData } from "../../redux/slices/user";

type FormFields = {
	name: HTMLInputElement;
	department: HTMLInputElement;
	company: HTMLInputElement;
	jobTitle: HTMLInputElement;
};
export const UserEditForm = () => {
	const { name, department, company, jobTitle } = useAppSelector(
		(state) => state.currentUser
	);
	const dispatch = useAppDispatch();
	
	const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (
		event
	) => {
		event.preventDefault();
		const form = event.currentTarget;

		const { name, department, company, jobTitle } = form;

		dispatch(
			setCurrentUserData({
				name: name.value,
				department: department.value,
				company: company.value,
				jobTitle: jobTitle.value,
			})
		);
	};

	return (
		<div className={S.user_edit_form}>
			<h3 className={S.user_header}>{name}</h3>
			<form className={S.user_form} onSubmit={handleSubmit}>
				<CustomInput
					defaultValue={name}
					inputType="name"
					labelText="Имя"
				/>
				<CustomInput
					defaultValue={department}
					inputType="department"
					labelText="Отдел"
				/>
				<CustomInput
					defaultValue={company}
					inputType="company"
					labelText="Компания"
				/>
				<CustomInput
					defaultValue={jobTitle}
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
