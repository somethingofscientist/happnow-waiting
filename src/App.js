import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from "react-toastify";
import Comingsoon_page from './components/comingsoon_page/Comingsoon_page';

function App() {
  return (
    <>
      <Comingsoon_page />
      <ToastContainer />
    </>
  );
}

export default App;
