import logo from './logo.svg';
import './App.css';
import './crate.js';
import CrateForm from './CrateForm.js';

function App() {
  function addCrate(e) {

  }
  return (
    <div className="App">
      <header className="App-header">
        a
        <br></br>
        <CrateForm onSubmit={addCrate} />
      </header>

    </div>
  );
}


export default App;
