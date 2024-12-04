import './App.css';
import { Header } from './Header';
import { Outlet } from 'react-router';

const App = () => {
  return (
    <div className="content">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
