import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";


const App = () => {

	return (
		<React.Fragment>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</React.Fragment>
	);
};

export default App;