import './index.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

export default function Layout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}
