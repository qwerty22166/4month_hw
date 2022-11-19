import './App.css';
import ClassOne from "./page/classOne/ClassOne";
import ClassTwo from "./page/classTwo/ClassTwo";
import SayHello from "./page/sayhHello/SayHello";

function App() {

    const user = {name: "Anna", age: 19}

    return (
    <div className="App">
        <ClassOne user={user}/>
        <ClassTwo user={user}/>
        <SayHello/>
    </div>
  );
}

export default App;
