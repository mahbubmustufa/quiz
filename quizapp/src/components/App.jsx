import Layout from "./Layout";
import Quiz from "./pages/Quiz";
//import Home from "./pages/Home";
import "./styles/App.css";

function App() {
	return (
		<>
			<Layout>
				{/*<Home />*/}
				{/*<Signup />*/}
				<Quiz />
			</Layout>
		</>
	);
}

export default App;
