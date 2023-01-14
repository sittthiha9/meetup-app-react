import MeetupList from "../components/meetup/MeetupList";
import {useEffect, useState} from "react";

function AllMeetups() {
    const [loadedMeetup, setLoadedMeetup] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-getting-strated-84099-default-rtdb.firebaseio.com/meetups.json')
            .then((response) => {
                return response.json();
            }).then((data) => {
                const meetups = [];

                for (const key in data){
                    const meetup = {
                        id : key,
                        ...data[key]
                    };
                    meetups.push(meetup)
                }
                setLoadedMeetup(meetups);
                setIsLoading(false);
        })
    }, [])

    if(isLoading){
        return <section>
            <p>Loading....</p>
        </section>
    }

    return (
        <section>
            <h1>All Meetup</h1>
            <ul>
                <MeetupList meetup = {loadedMeetup}/>
            </ul>
        </section>
    )
}

export default AllMeetups;