// import logo from './logo.svg';
import Header from './components/Header';
import downsample from './media/downsample.jpg';
import static_image from './media/static.png'
// import bw from './media/downsample_bw.jpeg';
import EditableContour from './components/EditableContour';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container container2">
        <div class = 'row'>
        <div class = "col-6">
          <h6>Original Image</h6>
          <img  src = {downsample} alt='original'></img>
          </div>
        <div class = "col-6">
        <h6>Contours Extracted</h6>
          <img  src = {static_image} alt='static'></img></div>
        </div>
        <div class = "padding"></div>
      <div class = "image-overlay">
          <EditableContour />
          <br></br>
          <h6>Editable Contour (Just drag the nodes)</h6>
      </div>
    </div>
    </div>
  );
}

export default App;
