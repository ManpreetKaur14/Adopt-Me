import Pet from "./Pet";
import ReactDOM from "react-dom";

const App = () => {
  <div>
    <h1>Adopt Me</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Bingo" animal="Cat" breed="Indie" />
    <Pet name="Jerry" animal="Cat" breed="Indie" />
  </div>
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
