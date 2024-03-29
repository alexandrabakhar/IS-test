import { changeUserData } from "../api/changeUserData";
import { startRefetchUsers } from "../redux/slices/load";
import { setChangedUserData } from "../redux/slices/user";
import { useAppDispatch } from "../redux/store";
import { ChangeData, OnChangedUserSuccess } from "../types";

export const useFormSubmit = () => {
	const dispatch = useAppDispatch();

	const onChangedUserSuccess: OnChangedUserSuccess = (
		userIndex,
		changedUserData
	) => {
		dispatch(startRefetchUsers({ changedUserIndex: userIndex }));
		dispatch(setChangedUserData(changedUserData));
	};
	const changeData: ChangeData = (initValues) => (event) => {
		const {
			name: initName,
			department: initDepartment,
			company: initCompany,
			jobTitle: initJobTitle,
			index,
		} = initValues;
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

		if (!Object.keys(changedUserData).length) {
			return;
		}

		changeUserData(index, changedUserData, onChangedUserSuccess);
	};

	return { changeData };
};