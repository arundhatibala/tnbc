// import logo from './logo.svg';
import Header from './components/Header';
import downsample from './media/downsample.jpg';
import bw from './media/downsample_bw.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container container2">
        <div className="row">
          <div className="col-4 test">
            <img src={downsample} alt="placeholder" />
          </div>
          <div className="col-4">
          <img src={bw} alt="placeholder" />
          </div>
          <div className="col-4">
          <img src={bw} alt="placeholder" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
