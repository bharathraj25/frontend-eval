/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import './EventCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkSolid, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from '../../context/ThemeProvider';
import { getDate } from '../../utils/common';
// import { faBookmark } from '@fortawesome/free-regular-svg-icons';

function EventCard({ event }) {
  const { themeColor } = useContext(ThemeContext);
  return (
    <div className="event-card-container" style={{ 'background-color': themeColor }}>
      <img src={event.imgUrl} alt="event" />
      <div className="event-card-content">
        <span className="event-name">{event.name}</span>
        <span className="event-desc">{event.description}</span>
        <div className="event-details">
          <div className="event-venue">
            <span>Venue: </span> {event.venue}
          </div>
          <div className="event-date">
            <span>Date: </span> {getDate(event.datetime, event.timezone)}
          </div>
        </div>
        <div className="event-status">
          <div className="event-booking-status">
            {!event.areSeatsAvailable && (
              <div className="align-center">
                <FontAwesomeIcon icon={faCircleXmark} style={{ height: '35px', color: '#ECECAB' }} />
                <span style={{ color: '#ECECAB' }}> No Seats Available</span>
              </div>
            )}
            {event.isRegistered && (
              <div className="align-center">
                <FontAwesomeIcon icon={faCircleCheck} style={{ height: '35px', color: '#A0F3AD' }} />
                <span style={{ color: '#A0F3AD' }}> Registered</span>
              </div>
            )}
          </div>
          {event.isBookmarked ? (
            <FontAwesomeIcon icon={faBookmarkSolid} style={{ height: '35px', color: '#EA8282' }} />
          ) : (
            <FontAwesomeIcon icon={faBookmarkRegular} style={{ height: '35px', color: '#EA8282' }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
