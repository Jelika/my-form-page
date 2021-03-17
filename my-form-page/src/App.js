import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import AppRouter from "./Router"


function App() {
  return (
    <Router>
    <div className="App">
      <AppRouter/>
    </div>
    </Router>
  );
}

export default App;
