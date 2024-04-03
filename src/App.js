import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome";
import AddComponent from "./components/AddComponent";
import AddComponentF from "./components/AddComponentF";
import Increase from "./components/Increase";
import Discoloration from "./components/Discoloration";
import Notification from "./components/Notification";

function App() {
    return (
        <div className="App">
            {/*<Welcome name="Admin"></Welcome>*/}
            {/*<AddComponent firstNumber={1} secondNumber={10}/>*/}
            {/*<AddComponentF firstNumber={2} secondNumber={10}/>*/}
            {/*<Increase/>*/}
            {/*<Discoloration/>*/}
            <Notification/>
        </div>
    );
}

export default App;
