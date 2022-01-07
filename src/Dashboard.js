import React, { useState, useEffect } from "react";
import moment from "moment";
import Moment from 'react-moment';
import Add from "./Add";
import EventCard from "./eventCard";
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function Dashboard(props) {
  const [events, cEvents] = useState([]);
  const [current, cCurrent] = useState(undefined);

  const refreshList = () => {
    props.client.getEvents().then((response) => cEvents(response.data));
  };

  const removeEvent = (id) => {
    props.client.removeEvent(id).then(() => refreshList());
  };

  const updateEvent = (id) => {
   
    let e = events.filter( (event) => { return event._id == id});
    if(e.length > 0){
   
    cCurrent(e[0])
    }
  };

  useEffect(() => {
    refreshList();
  }, []);

  const buildcards = () => {
    return events.map((current) => {
      return (
       <>
   
          <EventCard id={current._id} text={current.name} location={current.location} summary={current.summary} date={current.date} time={current.timeofevent} removeEvent={removeEvent} updateEvent={updateEvent}></EventCard>
         
      </>
        
            
        
      );
    });
  };

  return (
    <>
      Dashboard
      <br />
     {buildcards()}

      <Add
        client={props.client}
        refreshList={() => {
          refreshList();
          cCurrent(undefined);
        }}
        currentEvent={current}
      />
    </>
  );
}

export default Dashboard;
