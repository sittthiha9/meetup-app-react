import NewMeetupForm from "../components/meetup/NewMeetupForm";
import {useNavigate} from 'react-router-dom'

function NewMeetup() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch('https://react-getting-strated-84099-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST', body: JSON.stringify(meetupData), headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            navigate('/');
        })
    }

    return <div>
        <h1>New Meet Up</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
}

export default NewMeetup;