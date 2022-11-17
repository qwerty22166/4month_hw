import logo from './logo.svg';
import './App.css';

function AboutUs(props) {
  return <h1>{props.text}</h1>
}

function App() {
  return (
    <div className="App">
      <AboutUs text="title"/>
    </div>
  );
}

export default App;
