import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css"
import { useRef } from "react";

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.valueOf();
        const enteredImage = imageInputRef.current.valueOf();
        const enteredAddress = addressInputRef.current.valueOf();
        const enteredDescription = descriptionInputRef.current.valueOf();

        const meetupData = {
            title : enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            description : enteredDescription
        }

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor={'title'}>Meetup Title</label>
                    <input type={"text"} id={'title'} ref={titleInputRef} required/>
                </div>
                <div className={classes.control}>
                    <label htmlFor={'image'}>Image</label>
                    <input type={"url"} id={'image'} ref={imageInputRef} required/>
                </div>
                <div className={classes.control}>
                    <label htmlFor={'address'}>Meetup Address</label>
                    <input type={"text"} id={'address'} ref={addressInputRef} required/>
                </div>
                <div className={classes.control}>
                    <label htmlFor={'description'}>Meetup Address</label>
                    <textarea id={'description'} required rows={4} ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meet Up</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;