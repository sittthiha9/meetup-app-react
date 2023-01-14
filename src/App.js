import './App.css';
import {Routes, Route} from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path={'/'} element={<AllMeetups/>}/>
                <Route path={'/favourites'} element={<Favourites/>}/>
                <Route path={'/new-meetup'} element={<NewMeetup/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
