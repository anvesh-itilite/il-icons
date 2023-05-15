import "./App.css";
import IconList from "./components/IconList";

function App() {
  return (
    <div className="flex flex-col items-start">
      <div className="text-title3 font-semibold text-gray-500">Icons</div>
      {/* <div>Search (coming soon)</div> */}
      <IconList />
    </div>
  );
}

export default App;
