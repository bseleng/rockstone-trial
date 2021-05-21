import "./App.css";
import OrgMessagesWrapper from "./Components/Ad_Organisms/OrgMessagesWrapper/OrgMessagesWrapper";
import AdClock from "./Components/Ad_Atoms/AtmClock/AtmClock";
import SwipableViews from "./Components/__demos/SwipableVIews/SwipableViews";
import PgMessageTime from "./Components/Ad_Pages/PgMessageTime/PgMessageTime";
import {useRef, useState} from "react";

function App() {
  const [scroll, setScroll] = useState(0)
  const scrollRef = useRef(0)

  const handleScroll = () => {

    // console.log('1 🐞 scrolls', scrollRef.current)
    setScroll(scrollRef.current.scrollTop)
    console.log('2 🐞 scrolls', scroll)
  }
  return (
    <div className="App" onScroll={handleScroll} ref={scrollRef}>
      <PgMessageTime />
    </div>
  );
}

export default App;
