function Favorite({favPlayers}) {
    console.log("favPlayers", favPlayers)
    const allFavPlayers = favPlayers.length > 0
        ? favPlayers.map(fav => <p key = {fav.id}>{fav.firstName}</p>)
        : null
        const favorites = favPlayers.length > 0
        ? allFavPlayers
        : "No favorites selected"
        // --ELANS ANSWER --
        // const favorites = favPlayers.favPlayers.length > 0 
        // ? favPlayers.favPlayers.map(fav => <p>{fav.firstName}</p>)
        // : "no favorites"

    return(
        <div>
        <h2>Favorite Players!</h2>
        {favorites}
        </div>
    )

    //create a ternery that adds specfiic player on the favorite components
    //if not say "no favorites selected"

}
export default Favorite;