import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Resule from "./Resule";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Signup from "./pages/Signup";
import "./styles/App.css";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" Component={Home} />
					<Route exact path="/signup" Component={Signup} />
					<Route exact path="/quiz" Component={Quiz} />
					<Route exact path="/Resule" Component={Resule} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
