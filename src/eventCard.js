import React from "react";
import  Card  from "react-bootstrap/Card";
function EventCard(props){
    return (
        <>
     
        <Card>
            <Card.Body>
                <Card.Title>Event</Card.Title>
                <p>{props.name} Name </p>
                <p>{props.location} Location </p>
                <p>{props.summary} Summary </p>
                <p>{props.date} Date </p>
                <p>{props.timeofevent} Time </p>
                <button onClick={() => props.removeEvent(props.id)}> remove</button>
            <button onClick={() => props.updateEvent(props.id)}> update</button>
            </Card.Body>
        </Card>
        </>
    )




}

export default EventCard;
    
