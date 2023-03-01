import React, { useEffect, useState } from 'react';
import './Body.css';
import FilterIcon from '../FilterIcon';
import SearchContainer from '../SearchContainer';
import EventCard from '../EventCard';
import RadioCheckbox from '../RadioCheckbox';
import makeRequest from '../../utils/makeRequest';
import { EVENTS_URL, UPDATE_EVENT } from '../../constants/apiEndPoints';

function Body() {
  const [selectedBox, setSelectedBox] = useState('All');
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchName, setSearchName] = useState(undefined);

  const [openFilter, setOpenFilter] = useState(false);

  const updateBookmark = async (isBookmarked, eventId) => {
    try {
      console.log(isBookmarked, 'isBookmarked');
      await makeRequest(UPDATE_EVENT(eventId), {
        data: {
          isBookmarked,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    try {
      makeRequest(EVENTS_URL).then(eventsList => {
        setEvents(eventsList);
        setFilteredEvents(eventsList);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const updateFilteredEvents = filterType => {
    switch (filterType) {
      case 'All': {
        setFilteredEvents(events);
        break;
      }
      case 'Registered': {
        setFilteredEvents(events.filter(event => event.isRegistered));
        break;
      }
      case 'SeatsAvaiable': {
        setFilteredEvents(events.filter(event => event.areSeatsAvailable));
        break;
      }
      case 'BookMarked': {
        setFilteredEvents(events.filter(event => event.isBookmarked));
        break;
      }
      default: {
        break;
      }
    }
  };

  const searchEvents = eventName => {
    if (eventName) setFilteredEvents(events.filter(event => event.name.toLowerCase().includes(eventName)));
    else setFilteredEvents(events);
  };

  useEffect(() => {
    updateFilteredEvents(selectedBox);
  }, [selectedBox]);

  useEffect(() => {
    searchEvents(searchName);
  }, [searchName]);
  return (
    <div className="body-container">
      <div className="center-padding">
        <div className="body-header">
          <div className="body-filter">
            <FilterIcon openFilter={openFilter} setOpenFilter={setOpenFilter} />
            <SearchContainer searchName={searchName} setSearchName={setSearchName} />
          </div>
          {openFilter && (
            <div className="body-filter-options">
              <RadioCheckbox name="All" label="All" selectedBox={selectedBox} setSelectedBox={setSelectedBox} />
              <RadioCheckbox
                name="BookMarked"
                label="BookMarked"
                selectedBox={selectedBox}
                setSelectedBox={setSelectedBox}
              />
              <RadioCheckbox
                name="Registered"
                label="Registered"
                selectedBox={selectedBox}
                setSelectedBox={setSelectedBox}
              />
              <RadioCheckbox
                name="SeatsAvaiable"
                label="SeatsAvaiable"
                selectedBox={selectedBox}
                setSelectedBox={setSelectedBox}
              />
            </div>
          )}
        </div>
        <div className="body-content">
          {filteredEvents.map(event => {
            return <EventCard event={event} updateBookmark={updateBookmark} />;
          })}
          {/* <EventCard /> */}
        </div>
      </div>
    </div>
  );
}

export default Body;
