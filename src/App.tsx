import "./App.css";
// import { UserList } from "./components/UserList/UserList";
import { UserEditForm } from "./components/UserEditForm/UserEditForm";
import VirtualizedList from "./components/UserList/UserList";
import { useAppSelector } from "./redux/store";

function App() {
	const { id } = useAppSelector((state) => state.currentUser);
	return (
		<div className="App">
			<VirtualizedList />
			{/* <UserList /> */}
			{id && <UserEditForm />}
		</div>
	);
}

export default App;
