import RoutesMain from './Routes';
import Global from './styles/Global';
import Reset from './styles/Reset';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './Providers/UserContext';
import { TechProvider } from './Providers/TechContext';

const App = () => {
  return (
    <>
      <Reset />
      <Global />
      <TechProvider>
        <UserProvider>
          <RoutesMain />
        </UserProvider>
      </TechProvider>
      <ToastContainer
        position='top-right'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </>
  );
};

export default App;
