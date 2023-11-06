import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import SlideOver from "./components/SlideOver";

function App() {
  return (
    <div className=" bg-slate-800 h-screen">
      <Navbar />
      {/* <Navbar2 /> */}
      {/* <SlideOver /> */}
      <Home />
    </div>

  );
}

export default App;
