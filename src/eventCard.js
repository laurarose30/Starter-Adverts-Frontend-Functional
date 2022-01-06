import React from "react";
import { Card } from "react-bootstrap";
//import { Image } from "react-bootstrap";
import "./Dashboard";
//import moment from "moment";
export default function eventCard(props){


function eventCard (props){
    return (
        <Card>
            <Card.Body>
                <Card.Title>Event</Card.Title>
                <p>{props.current.name} Name </p>
                <p>{props.current.location} Location </p>
                <p>{props.current.summary} Summary </p>
                <p>{props.current.date} Date </p>
                <p>{props.current.timeofevent} Time </p>
               
            </Card.Body>
        </Card>

    )



}
}
    
