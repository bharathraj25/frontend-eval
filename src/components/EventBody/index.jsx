import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EVENT_BY_ID, UPDATE_EVENT } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import EventCard from '../EventCard';
import './EventBody.css';

function EventBody() {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});

  const updateBookmark = async isBookmarked => {
    try {
      await makeRequest(UPDATE_EVENT(eventId), {
        data: {
          isBookmarked,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const updateRegister = async isRegistered => {
    try {
      await makeRequest(UPDATE_EVENT(eventId), {
        data: {
          isRegistered,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    makeRequest(EVENT_BY_ID(eventId)).then(eventObj => {
      setEvent(eventObj);
    });
  }, []);
  return (
    <div className="center-padding">
      <div className="each-event-container">
        <div className="event-page-body">
          <EventCard event={event} isPage updateBookmark={updateBookmark} updateRegister={updateRegister} />
        </div>
      </div>
    </div>
  );
}

export default EventBody;
