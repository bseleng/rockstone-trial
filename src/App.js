import "./App.css";
import AdMessagesWrapper from "./Components/Ad_Organisms/AdMessagesWrapper/AdMessagesWrapper";
import AdClock from "./Components/Ad_Atoms/AdClock/AdClock";

function App() {
  return (
    <div className="App">
      <AdClock/>
      <AdMessagesWrapper btnName={"Отправить"} />
    </div>
  );
}

export default App;
