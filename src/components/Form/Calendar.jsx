import React, { useEffect, useState } from 'react';
import { getNumberOfDaysInMonth } from '../../helpers/helpers';
import { getInformationAboutBooking } from '../../api/api';

const Calendar = ({ setDate }) => {
  const arrayDays = Array.from(
    { length: getNumberOfDaysInMonth() },
    (v, k) => k + 1
  );
  const [infoBooking, setInfoBooking] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [busyDaysList, setBusyDaysList] = useState([]);
  const [freeDaysList, setFreeDaysList] = useState([]);

  useEffect(() => {
    const addZeroIfNeed = (number) => (number < 10 ? `0${number}` : number);
    const today = new Date();
    const from = `${today.getFullYear()}.${addZeroIfNeed(
      today.getMonth() + 1
    )}.1`;
    const to = `${today.getFullYear()}.${addZeroIfNeed(
      today.getMonth() + 1
    )}.${getNumberOfDaysInMonth()}`;

    setBusyDaysList([]);
    setFreeDaysList([]);

    getInformationAboutBooking(from, to).then((data) => {
      data.forEach((item) => {
        if (item?.booking?.length > 0) {
          setBusyDaysList((prevState) => [...prevState, item]);
        } else {
          setFreeDaysList((prevState) => [...prevState, item]);
        }
      });
    });
  }, []);

  console.log(busyDaysList);

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
                const classList = `${
                  day % 7 === 0 || day % 7 === 6 ? 'light ' : ''
                }${selectedDate === day ? 'medium underline ' : ''}${
                  busyDaysList.some((item) => {
                    console.log(typeof item.date.split('.')[2], typeof day);
                    console.log(
                      item.date.split('.')[2],
                      day,
                      +item.date.split('.')[2] === day
                    );
                    return +item.date.split('.')[2] === day;
                  })
                    ? 'line-through'
                    : ''
                }`;

                const handleClick = () => {
                  if (day % 7 === 0 || day % 7 === 6) return;

                  const today = new Date();
                  setDate(
                    `${today.getFullYear()}.${today.getMonth() + 1}.${day}`
                  );
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
