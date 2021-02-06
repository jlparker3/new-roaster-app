function Player(props) {
    console.log("player props", props)
    return (
        // <p>{props.name} his jersey number is {props.jersey}</p>
        <div>
            <h3>Player name: {props.firstName} </h3>
            <p>Jersey number: {props.jerseyNumber}</p>
            <ul>Hobbies: 
                <li>{props.hobbies.map(hobby=>{
                    return(
                        <li>{hobby}</li> 
                    )
                })}</li>
               
             </ul>
            <hr></hr>
          
        </div>
    );
}

export default Player;

//player name h3
//add list of hobbies under each player

