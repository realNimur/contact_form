import React, { useEffect, useState } from 'react';

const Name = ({ setName }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setName(inputValue);
  }, [inputValue]);

  return (
    <>
      <div className="row row-offset-80">
        <div className="col-1 d-none-mobile">
          <span className="txt-22">3.</span>
        </div>
        <div className="col-5">
          <span className="txt-22 uppercase">Ваше имя</span>
        </div>
        <div className="col-1 d-none-desktop">
          <span className="txt-22">3.</span>
        </div>
      </div>
      <div className="row row-offset-40 row-offset-mobile-80">
        <div className="col-2 col-offset-1 col-mobile-5 col-offset-mobile-0">
          <input
            type="text"
            className="input-control"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value.trim())}
          />
        </div>
        <div className="col-1 col-offset-1 d-none-mobile">
          {inputValue?.length > 0 && <span className="txt-22">Ага</span>}
        </div>
      </div>
    </>
  );
};

export default Name;
