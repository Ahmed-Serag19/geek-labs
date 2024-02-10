import DashboardNav from '../components/DashboardNav';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardNav />
      <div className="dashboard-content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
