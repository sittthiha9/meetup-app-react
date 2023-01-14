import {useContext} from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetup/MeetupList";

function Favourites() {
    const favouritesMeetup = useContext(FavouritesContext);

    let content;

    if(favouritesMeetup.totalFavourites === 0){
        content = <p>There is no favourites</p>
    }else {
        content = <MeetupList meetup = {favouritesMeetup.favourites}/>
    }

    return (
        <section>
            <h1>Favourite Meetups</h1>
            {content}
        </section>
    )
}

export default Favourites;