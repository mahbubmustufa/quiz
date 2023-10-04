import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Layout from "./Layout";
import PriveteRoute from "./PriveteRoute";
import Result from "./Result";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Signup from "./pages/Signup";
import "./styles/App.css";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Layout>
					<Routes>
						<Route exact path="/" Component={Home} />
						<Route exact path="/signup" Component={Signup} />
						<PriveteRoute exact path="/quiz" Component={Quiz} />
						<PriveteRoute exact path="/result" Component={Result} />
						<Route exact path="/login" Component={Login} />
					</Routes>
				</Layout>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
