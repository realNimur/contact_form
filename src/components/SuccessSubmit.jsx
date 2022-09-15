import React from 'react';

const SuccessSubmit = () => {
  return (
    <form className="main" id="main">
      <div className="container">
        <div className="row">
          <div className="col-3 col-mobile-6">
            <h1 className="txt-44">
              Класс! Увидимся 11 августа. Ссылочку на Zoom отправим на почту
              osintsev@spaaace.io
            </h1>
          </div>
        </div>
        <div className="row row-offset-160 row-offset-mobile-80">
          <div className="col-3 col-mobile-6">
            <a
              href="http://instagram.com/spaaacestudio/"
              target="_blank"
              className="txt-22 uppercase link-hover"
            >
              Подпишитесь на Инстаграм заодно
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SuccessSubmit;
