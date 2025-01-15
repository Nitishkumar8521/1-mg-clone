import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";
import Uppermost_Title from "./Components/Uppermost_Title";

function App() {
  return (
    <>
      <Uppermost_Title />
      <Navbar />
      <AllRoutes />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
