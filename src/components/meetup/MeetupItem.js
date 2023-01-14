import classes from './MeetupItem.module.css'
import Card from "../ui/Card";
import {useContext} from "react";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {

    const favouriteContext = useContext(FavouritesContext);
    const itemIsFavourite = favouriteContext.itemIsFavourites(props.id);

    function toggleFavourite() {
        if (itemIsFavourite) {
            favouriteContext.removeFavourites(props.id);
        } else {
            favouriteContext.addFavourites({
                id: props.id,
                image: props.image,
                address: props.address,
                description: props.description,
                title: props.title
            })
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavourite}>{itemIsFavourite ? 'Remove from favourite' : 'To Favourite'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;