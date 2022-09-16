import React, { useContext, useEffect, useState } from 'react';
import { firstDayOfMonth, lastDayOfMonth } from '../../helpers/helpers';
import { getInformationAboutBooking } from '../../api/api';
import ErrorMessage from '../ErrorMessage';
import Calendar from 'react-calendar';
import '../../styles/calendar.css';
import { LangContext } from '../../App';

const CalendarSection = ({ setDate, errorDay }) => {
  const translate = useContext(LangContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [busyDaysList, setBusyDaysList] = useState([]);
  const [freeDaysList, setFreeDaysList] = useState([]);
  let freeDay = null;

  const isFreeDay = (date) => {
    return freeDaysList.some((item) => {
      if (item.date === formatDate(date)) freeDay = item;
      return item.date === formatDate(date);
    });
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}.${
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }.${date.getDate()}`;
  };

  const handleClick = (today) => {
    if (!isFreeDay(today)) {
      setDate({
        date: '',
        start: '',
        finish: '',
      });
    } else {
      setDate({
        date: `${today.getFullYear()}.${
          today.getMonth() + 1
        }.${today.getDate()}`,
        start: freeDay.start,
        finish: freeDay.finish,
      });
      setSelectedDate(today);
    }
  };

  function tileClassName({ date, view }) {
    if (view === 'month') {
      if (busyDaysList.some((item) => item.date === formatDate(date))) {
        return 'throw normal';
      }
      if (freeDaysList.some((item) => item.date === formatDate(date))) {
        return 'normal';
      }
    }
  }

  useEffect(() => {
    setBusyDaysList([]);
    setFreeDaysList([]);

    getInformationAboutBooking(firstDayOfMonth, lastDayOfMonth).then((data) => {
      data.forEach((item) => {
        if (item?.booking?.length > 0) {
          setBusyDaysList((prevState) => [...prevState, item]);
        } else {
          setFreeDaysList((prevState) => [...prevState, item]);
        }
      });
    });
  }, []);

  return (
    <>
      <div className="row row-offset-80">
        <div className="col-1 d-none-mobile">
          <span className="txt-22">5.</span>
        </div>
        <div className="col-5">
          <span className="txt-22 uppercase">{translate['PICK A DATE']}</span>
          {errorDay ? <ErrorMessage text={'Необходимо выбрать день'} /> : null}
        </div>
        <div className="col-1 d-none-desktop">
          <span className="txt-22">5.</span>
        </div>
      </div>
      <div className="row row-offset-40 row-offset-mobile-80">
        <div className={'col-2 col-offset-1 col-mobile-6 col-offset-mobile-0'}>
          <Calendar
            locale={translate['NO'] === 'NO' ? 'en-EN' : 'ru-RU'}
            onChange={setSelectedDate}
            value={selectedDate}
            onClickDay={(value) => handleClick(value)}
            tileClassName={tileClassName}
          />
        </div>
      </div>
    </>
  );
};

export default CalendarSection;
