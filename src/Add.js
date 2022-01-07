import React, { useState } from "react";

function Add(props) {
  const [disabled, cDisabled] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    cDisabled(true);
    let result;
    if (props.currentEvent) {
      result = props.client.updateEvent(
        props.currentEvent._id,
        e.target.eventName.value,
        e.target.location.value,
        e.target.summary.value,
        e.target.date.value,
        e.target.timeofevent.value
      );
    } else {
      result = props.client.addEvent(e.target.eventName.value, e.target.location.value, e.target.summary.value, e.target.date.value, e.target.timeofevent.value);
    }
    result
      .then(() => {
        cDisabled(false);
        document.getElementById("addForm").reset();
        props.refreshList();
      })
      .catch(() => {
        alert("an error occured, please try again");
        cDisabled(false);
      });
  };

  return (
    
    <>
   
      {props.currentEvent ? "Update" : "Add"}
      <br />

      <form onSubmit={(e) => submitHandler(e)} id="addForm">
        Name: <br />
        <input
          type="text"
          defaultValue={props.currentEvent?.name}
          name="eventName"
          disabled={disabled}
        />
        <br />
        Location:
        <br />
        <input
          type="text"
          defaultValue={props.currentEvent?.location}
          name="location"
          disabled={disabled}
        />
        <br />
        summary:
        <br />
        <input
          type="text"
          defaultValue={props.currentEvent?.summary}
          name="summary"
          disabled={disabled}
        />
        <br/>
      Date:
        <br />
        <input
          type="date"
          defaultValue={props.currentEvent?.date}
          name="date"
          disabled={disabled}
        />
        <br/>
         Time:
        <br />
        <input
          type="text"
          defaultValue={props.currentEvent?.timeofevent}
          name="timeofevent"
          disabled={disabled}
        />
        <br />

        <button type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}

export default Add;
