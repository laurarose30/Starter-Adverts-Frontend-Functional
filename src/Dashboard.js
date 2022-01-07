import React, { useState, useEffect } from "react";

import Add from "./Add";
import EventCard from "./eventCard";


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
   
          <EventCard id={current._id} name={current.name} location={current.location} summary={current.summary} date={current.date} timeofevent={current.timeofevent} removeEvent={removeEvent} updateEvent={updateEvent}></EventCard>
         
    
      </>
        
        
      );
    });
  };

  return (
    <>
      Events
      <br />
      <div class="row row-cols-1 row-cols-md-3 g-4">
     {buildcards()}
      </div>
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
