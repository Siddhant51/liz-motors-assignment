import "./App.css";
import MindMap from "./components/MindMap";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App flex w-full h-screen bg-slate-200">
      <Topbar />
      <MindMap />
    </div>
  );
}

export default App;
