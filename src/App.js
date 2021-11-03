import logo from './logo.svg';
import './App.css';
import DisplayName from './component/DisplayName';
import NameList from './component/NameList';
import AlertUser from './component/AlertUser';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><DisplayName></DisplayName></h1>
        <h2><NameList></NameList></h2>
        <h3><AlertUser></AlertUser></h3>
      </header>
    </div>
  );
}

export default App;