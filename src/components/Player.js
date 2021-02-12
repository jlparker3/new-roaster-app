function Player(props) {
    console.log("player props", props)
    var playerConditional = props.hobbies.length <= 0 ? <p>No hobbies listed</p> 
                            : <li>{props.hobbies.map(hobby=>{
                                return(
                                    <li key={props.id}>{hobby}</li> 
                                ) 
                            })}</li>
    
    return (
        // <p>{props.name} his jersey number is {props.jersey}</p>
        <div>
            <h3>Player name: {props.firstName} {props.lastName}</h3>
            <p>Jersey number: {props.jerseyNumber}</p>
            <ul>Hobbies: 
                {playerConditional}
                
               
             </ul>
             <button onClick={()=> props.addFav(props.id)}>Add to Favorites</button>
            <hr></hr>
          
        </div>
    );
}



export default Player;


//player name h3
//add list of hobbies under each player

