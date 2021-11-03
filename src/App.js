import logo from './logo.svg';
import './App.css';
import DisplayName from './component/DisplayName';
import NameList from './component/NameList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><DisplayName></DisplayName></h1>
        <h2><NameList></NameList></h2>
      </header>
    </div>
  );
}

export default App;