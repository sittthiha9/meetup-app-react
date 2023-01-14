import {Link} from "react-router-dom";
import classes from './MainNavigation.module.css';
import {useContext} from "react";
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {
    const totalFavourites = useContext(FavouritesContext);

    return <header className={classes.header}>
        <div className={classes.logo}>React Meetup</div>
        <nav>
            <ul>
                <li><Link to={'/'}>All Meet Up</Link></li>
                <li><Link to={'/favourites'}>Favourites
                    <span className={classes.badge}>{totalFavourites.totalFavourites}</span>
                </Link></li>
                <li><Link to={'/new-meetup'}>New Meetup</Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;