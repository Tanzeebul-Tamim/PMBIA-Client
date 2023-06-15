import { Outlet } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import SideNav from '../shared_components/SideNav/SideNav';

const Dashboard = () => {
  return (
    <div>
      <ScrollToTop />
      <div className="flex">
        <SideNav />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
