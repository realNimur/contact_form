import './styles/vendor.min.css';
import './styles/app.min.css';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Form from './components/Form';
import BackgroundVideo from './components/BackgroundVideo';
import SuccessSubmit from './components/SuccessSubmit';

function App() {
  return (
    <>
      <Header />
      <MobileMenu />
      {/*<Form />*/}
      <SuccessSubmit />
      <BackgroundVideo />
    </>
  );
};

export default App;
