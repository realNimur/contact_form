import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Budget from './Budget';
import Email from './Email';
import Name from './Name';
import { requestToBooking } from '../../api/api';
import CalendarSection from './CalendarSection';

const Form = () => {
  const [errorName, setErrorName] = useState(false);
  const [errorDay, setErrorDay] = useState(false);
  const [errorEmail, setErrorEmail] = useState(0);
  const [infoBooking, setInfoBooking] = useState({
    date: '',
    name: '',
    email: '',
    start: '8:00',
    finish: '13:00',
    note: 'Бюджет меньше 10 000$',
    products: [],
  });

  console.log(infoBooking);

  const setName = (text) => {
    setInfoBooking((prevState) => ({ ...prevState, name: text }));
  };

  const setProduct = (productId) => {
    let products = infoBooking.products;

    if (products.some((item) => item.id === productId)) {
      products = products.filter((item) => item.id !== productId);
    } else {
      products = [...products, { id: productId }];
    }

    setInfoBooking((prevState) => ({ ...prevState, products }));
  };

  const setEmail = (email) => {
    setInfoBooking((prevState) => ({ ...prevState, email }));
  };

  const setDate = ({ date, start, finish }) => {
    setInfoBooking((prevState) => ({ ...prevState, date, start, finish }));
  };

  const setNote = (text) => {
    setInfoBooking((prevState) => ({
      ...prevState,
      note: text,
    }));
  };

  const submit = () => {
    if (!infoBooking.name) {
      setErrorName(true);
    } else {
      setErrorName(false);
    }

    if (!infoBooking.date) {
      setErrorDay(true);
    } else {
      setErrorDay(false);
    }

    if (!infoBooking.email) {
      return setErrorEmail(1);
    } else {
      setErrorEmail(0);
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(infoBooking.email)) {
      return setErrorEmail(2);
    } else {
      setErrorEmail(0);
    }

    if (errorName || errorEmail === 1 || errorEmail === 2 || errorDay) {
      return;
    }

    setErrorEmail(0);
    setErrorName(false);
    setErrorDay(false);

    requestToBooking(
      JSON.stringify({
        date: '2022.9.21',
        start: '18:00',
        finish: '21:00',
        name: 'Николай',
        email: 'test@test.com',
        note: 'Заметки о заявке',
        products: ['KSTT7F'],
      })
    )
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setErrorName(false);
  }, [infoBooking.name]);

  useEffect(() => {
    setErrorEmail(0);
  }, [infoBooking.email]);

  useEffect(() => {
    setErrorDay(false);
  }, [infoBooking.date]);

  return (
    <div className="main" id="main">
      <div className="container">
        <div className="row">
          <div className="col-3 col-mobile-4">
            <h1 className="txt-88 txt-44-mobile">Планируем звонок</h1>
          </div>
        </div>
        <ProductList setProduct={setProduct} />
        <Budget setNote={setNote} />
        <Name setName={setName} errorName={errorName} />
        <Email setEmail={setEmail} errorEmail={errorEmail} />
        <CalendarSection setDate={setDate} errorDay={errorDay} />
        <div className="row row-offset-80">
          <div className="col-1 d-none-mobile">
            <span className="txt-22">6.</span>
          </div>
          <div className="col-5">
            <button className="btn txt-44 uppercase" onClick={submit}>
              Отправить
            </button>
          </div>
          <div className="col-1 d-none-desktop">
            <span className="txt-22">6.</span>
          </div>
        </div>
        <div className="row row-offset-160"></div>
      </div>
    </div>
  );
};

export default Form;
