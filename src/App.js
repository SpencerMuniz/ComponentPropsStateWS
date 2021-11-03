import logo from './logo.svg';
import './App.css';
import DisplayName from './component/DisplayName';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><DisplayName></DisplayName></h1>
      </header>
    </div>
  );
}

export default App;