import React, { useEffect, useState } from 'react';
import {
  firstDayOfMonth,
  getNumberOfDaysInMonth,
  lastDayOfMonth,
} from '../../helpers/helpers';
import { getInformationAboutBooking } from '../../api/api';

const Calendar = ({ setDate }) => {
  const arrayDays = Array.from(
    { length: getNumberOfDaysInMonth() },
    (v, k) => k + 1
  );
  const [selectedDate, setSelectedDate] = useState(null);
  const [busyDaysList, setBusyDaysList] = useState([]);
  const [freeDaysList, setFreeDaysList] = useState([]);

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
          <span className="txt-22 uppercase">Выберите дату в августе</span>
        </div>
        <div className="col-1 d-none-desktop">
          <span className="txt-22">5.</span>
        </div>
      </div>
      <div className="row row-offset-40 row-offset-mobile-80">
        <div className="col-2 col-offset-1 col-mobile-6 col-offset-mobile-0">
          <div className="c-calendar">
            <div className="c-calendar__top">
              <span className="c-calendar__elem txt-16">П</span>
              <span className="c-calendar__elem txt-16">В</span>
              <span className="c-calendar__elem txt-16">С</span>
              <span className="c-calendar__elem txt-16">Ч</span>
              <span className="c-calendar__elem txt-16">П</span>
              <span className="c-calendar__elem txt-16 light">С</span>
              <span className="c-calendar__elem txt-16 light">В</span>
            </div>
            <div className="c-calendar__main">
              {arrayDays.map((day) => {
                let freeDay = null;
                const isFreeDay = freeDaysList.some((item) => {
                  if (+item.date.split('.')[2] === day) freeDay = item;
                  return +item.date.split('.')[2] === day;
                });
                const isBusyDay = busyDaysList.some(
                  (item) => +item.date.split('.')[2] === day
                );
                const isSelectedDate = selectedDate === day;

                const classList = `${isFreeDay ? '' : 'light '}${
                  isSelectedDate ? 'medium underline ' : ''
                }${isBusyDay ? 'line-through' : ''}`;

                const handleClick = () => {
                  if (!isFreeDay) return;

                  const today = new Date();

                  setDate({
                    date: `${today.getFullYear()}.${
                      today.getMonth() + 1
                    }.${day}`,
                    start: freeDay.start,
                    finish: freeDay.finish,
                  });
                  setSelectedDate(day);
                };

                return (
                  <span
                    onClick={handleClick}
                    key={+day}
                    style={{ cursor: 'pointer' }}
                    className={`c-calendar__elem txt-22 ${classList}`}
                  >
                    {day}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
