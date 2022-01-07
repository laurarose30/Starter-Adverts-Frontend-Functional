import React from "react";
import  Card  from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css'

import Moment from "react-moment";



function EventCard(props){
console.log(EventCard)

    return (
        <>
        
            
            
            <Card id="main"className=" m-5 "  style={{ width: '20rem' }} >
                <Card.Body >
                 <Card.Title>Event</Card.Title>
                    <p>Name: {props.name} </p>
                    <p>Location: {props.location}  </p>
                    <p>Summary: {props.summary}  </p>
                    <p>Date: <Moment format="dd-MM-yyyy">{props.date}</Moment>  </p>
                    <p>Time: {props.timeofevent}  </p>
                    <button id="button" onClick={() => props.removeEvent(props.id)}> remove</button>
                    <button id="button" onClick={() => props.updateEvent(props.id)}> update</button>
                </Card.Body>
            </Card>

     
         
      
        
        </>
    )




}

export default EventCard;
    
