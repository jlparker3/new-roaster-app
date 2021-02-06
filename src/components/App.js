
import '../App.css';
import Welcome from "./Welcome";
import Player from "./Player";
import PlayerList from "./PlayerList";
import { playerData } from "../data/playerData";

// console.log("pd", playerData)
function App() {
  return (
    <div className="container">
      <Welcome />
      <PlayerList 
      players={playerData} />
      {/* <Player name="Jose" jersey={27}/>
      <Player name="Justin" jersey={35}/> */}
    </div>
  );
}

export default App;
