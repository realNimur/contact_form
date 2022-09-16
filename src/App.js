import './styles/vendor.min.css';
import './styles/app.min.css';
import Header from './components/Header';
import BackgroundVideo from './components/BackgroundVideo';
import SuccessSubmit from './components/SuccessSubmit';
import React, { useState } from 'react';
import Form from './components/Form';
import { ru } from './helpers/dictionary';

export const LangContext = React.createContext(null);

function App() {
  const [isSuccessSubmit, setSuccessSubmit] = useState(false);
  const [lang, setLang] = useState(ru);
  const [userInfo, setInfoUser] = useState({
    date: '',
    email: '',
  });

  return (
    <>
      <LangContext.Provider value={lang}>
        <Header setLang={setLang} isSuccessSubmit={isSuccessSubmit} />
        {isSuccessSubmit ? (
          <SuccessSubmit userInfo={userInfo} />
        ) : (
          <Form setInfoUser={setInfoUser} setSuccessSubmit={setSuccessSubmit} />
        )}
        <BackgroundVideo />
      </LangContext.Provider>
    </>
  );
}

export default App;
