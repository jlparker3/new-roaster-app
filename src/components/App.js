
import '../App.css';
import Welcome from "./Welcome";
import Player from "./Player";
import PlayerList from "./PlayerList";
import { playerData } from "../data/playerData";
import Favorite from "./Favorite";
import React,  { useState } from "react";

// console.log("pd", playerData)
function App() {
  const [favorites, setFavorites] = useState([] )
  
  const addFavorite = (id) => {
    console.log("hi", id)

    /*
    using the id find the player obj in the playerData array
    take found player and move it into the favorites array
    */
   const foundPlayer = playerData.find(player => player.id === id )
   console.log("found player", foundPlayer)

   const updatedFavorites = favorites.slice()
   updatedFavorites.push(foundPlayer)
   setFavorites(updatedFavorites)
  }

  return (
    <div className="container">
      <Welcome />
      <PlayerList 
      players={playerData} 
      addFavorite={addFavorite}
      
       />

      {/* <Player name="Jose" jersey={27}/>
      <Player name="Justin" jersey={35}/> */}

      <Favorite 
        favPlayers={favorites}/>
    </div>
  );
}

export default App;
