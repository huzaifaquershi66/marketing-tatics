import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/stylingcomp/footer';
import ScrollToTop from './components/Scrool'; // ScrollToTop component import karein

function App() {
  return (
    <>
      <ScrollToTop /> {/* ScrollToTop ko yahan add karen */}
      <Header />
      <Outlet /> {/* Yeh nested routes ko render karega */}
      <Footer />
    </>
  );
}

export default App;
