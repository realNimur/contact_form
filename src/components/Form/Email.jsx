import React, { useEffect, useState } from 'react';

const Email = ({ setEmail }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setEmail(inputValue);
  }, [inputValue]);

  return (
    <>
      <div className="row row-offset-80">
        <div className="col-1 d-none-mobile">
          <span className="txt-22">4.</span>
        </div>
        <div className="col-5">
          <span className="txt-22 uppercase">Email</span>
        </div>
        <div className="col-1 d-none-desktop">
          <span className="txt-22">4.</span>
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
        <div className="col-1 col-offset-1 col-offset-mobile-0 d-none-mobile">
          {inputValue?.length > 0 && <span className="txt-22">Есть</span>}
        </div>
      </div>
    </>
  );
};

export default Email;
