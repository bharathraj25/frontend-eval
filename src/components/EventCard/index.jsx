/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import './EventCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkSolid, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeProvider';
import { getDate } from '../../utils/common';
import { EVENT_ROUTE } from '../../constants/routes';
// import { faBookmark } from '@fortawesome/free-regular-svg-icons';

function EventCard({ event, updateBookmark, updateRegister, isPage }) {
  const navigate = useNavigate();
  const { themeColor } = useContext(ThemeContext);
  const [bookmark, setBookmark] = useState(false);
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    setBookmark(event.isBookmarked);
    setRegistered(event.isRegistered);
  }, [event]);
  return (
    <div
      className="event-card-container"
      style={{ 'background-color': themeColor }}
      role="button"
      onClick={() => isPage ?? navigate(`${EVENT_ROUTE}/${event.id}`)}>
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
            {registered && (
              <div className="align-center">
                <FontAwesomeIcon icon={faCircleCheck} style={{ height: '35px', color: '#A0F3AD' }} />
                <span style={{ color: '#A0F3AD' }}> Registered</span>
              </div>
            )}
          </div>
          {bookmark ? (
            <FontAwesomeIcon
              icon={faBookmarkSolid}
              style={{ height: '35px', color: '#EA8282' }}
              role="button"
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                updateBookmark(!bookmark, event.id);
                setBookmark(!bookmark);
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBookmarkRegular}
              style={{ height: '35px', color: '#EA8282' }}
              role="button"
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                updateBookmark(!bookmark, event.id);
                setBookmark(!bookmark);
              }}
            />
          )}
        </div>
        {isPage && (
          <div className="register-button">
            <button
              type="button"
              style={{ color: themeColor }}
              disabled={!event.areSeatsAvailable}
              onClick={() => {
                updateRegister(!registered, event.id);
                setRegistered(!registered);
              }}>
              {registered ? 'UnRegister' : 'Register'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventCard;
