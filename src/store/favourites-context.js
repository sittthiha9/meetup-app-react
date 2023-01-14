import {createContext, useState} from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourites : (addFavouritesHandler) => {},
    removeFavourites : (removeFavouritesHandler) => {},
    itemIsFavourites : (itemIsFavouritesHandler) => {}
})

export function FavouritesContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouritesHandler(favouriteMeetup){
        setUserFavourites((preUserFavourites) => {
            return preUserFavourites.concat(favouriteMeetup);
        })
    }

    function removeFavouritesHandler(meetupId){
        setUserFavourites((preUserFavourites) => {
            return preUserFavourites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemIsFavouritesHandler(meetupId){
        return userFavourites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favourites : userFavourites,
        totalFavourites : userFavourites.length,
        addFavourites : addFavouritesHandler,
        removeFavourites : removeFavouritesHandler,
        itemIsFavourites : itemIsFavouritesHandler
    }

    return (
        <FavouritesContext value={context}>
            {props.children}
        </FavouritesContext>
    )
}

export default FavouritesContext;