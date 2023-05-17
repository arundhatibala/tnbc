// import logo from './logo.svg';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container container2">
        <div className="row">
          <div className="col-4 test">
            <img src="https://via.placeholder.com/300" alt="placeholder" />
          </div>
          <div className="col-4">
          <img src="https://via.placeholder.com/300" alt="placeholder" />
          </div>
          <div className="col-4">
          <img src="https://via.placeholder.com/300" alt="placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
