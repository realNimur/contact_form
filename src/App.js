import './styles/vendor.min.css';
import './styles/app.min.css';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import BackgroundVideo from './components/BackgroundVideo';
import SuccessSubmit from './components/SuccessSubmit';
import { useState } from 'react';
import Form from './components/Form';

function App() {
  const [isSuccessSubmit, setSuccessSubmit] = useState(false);

  return (
    <>
      <Header isSuccessSubmit={isSuccessSubmit} />
      <MobileMenu />
      {isSuccessSubmit ? <SuccessSubmit /> : <Form />}
      <BackgroundVideo />
    </>
  );
}

export default App;
