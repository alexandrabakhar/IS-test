import "./App.css";
// import { UserList } from "./components/UserList/UserList";
import { UserEditForm } from "./components/UserEditForm/UserEditForm";
import VirtualizedList from "./components/UserList/UserList";
import { User } from "./types";

function App() {
	const loadPage = async (pageNumber: number): Promise<User[]> => {
		console.log(pageNumber);
		const query = pageNumber
			? `orderBy="$key"&startAt="${
				pageNumber + 1
			  }"&limitToFirst=${20}`
			: `orderBy="$key"&limitToFirst=${20}`;
		const response = await fetch(
			`https://testforinfinitesynergy-default-rtdb.europe-west1.firebasedatabase.app/.json/?${query}`
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		const itemsArray = Object.keys(data).map((key) => {
			const item = data[key];
			return {
				...item,
				id: key, // Убедитесь, что у объекта item есть поле id
			};
		});
		return itemsArray;
	};

	return (
		<div className="App">
			<VirtualizedList loadPage={loadPage} />
			{/* <UserList /> */}
			<UserEditForm />
		</div>
	);
}

export default App;
