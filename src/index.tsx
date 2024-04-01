import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";

import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { appStore } from "./redux/store";
import { App } from "./App";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={appStore}>
			<App />
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
