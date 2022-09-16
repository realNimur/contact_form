import React, { useState } from 'react';

const Budget = ({ setNote }) => {
  const [isBudgetOK, setBudgetOK] = useState(false);

  const handleClick = () => {
    if (isBudgetOK) {
      setNote('Бюджет больше 10 000$');
    } else {
      setNote('Бюджет меньше 10 000$');
    }
    setBudgetOK((prevState) => !prevState);
  };

  return (
    <>
      <div className="row row-offset-80">
        <div className="col-1 d-none-mobile">
          <span className="txt-22">2.</span>
        </div>
        <div className="col-5">
          <span className="txt-22 uppercase">Ваш бюджет</span>
        </div>
        <div className="col-1 d-none-desktop">
          <span className="txt-22">2.</span>
        </div>
      </div>
      <div className="row row-offset-40 row-offset-mobile-80">
        <div className="col-3 col-offset-1 col-mobile-5 col-offset-mobile-0">
          <span className="txt-44 uppercase">> 10.000 USD</span>
        </div>
        <div className="col-1">
          <label htmlFor="pp" className="true-checkbox">
            <input type="checkbox" id="pp" className="true-checkbox__input" />
            <span className="true-checkbox__value" onClick={handleClick}>
              {isBudgetOK ? 'Да' : 'Нет'}
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Budget;
