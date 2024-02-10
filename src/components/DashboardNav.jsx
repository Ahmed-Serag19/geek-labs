import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DashboardLink from './DashboardLink';
import { NavLink, useLocation } from 'react-router-dom';

const DashboardNav = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  const activeLinkStyles = {
    color: 'white', // Customize the styles for active links
  };
  const notActiveLinkStyles = {
    color: '#272727', // Customize the styles for active links
  };
  return (
    <Box
      className="dashboard-nav"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        color: 'grey',
        paddingX: 2,
        marginX: 2,
      }}
    >
      <NavLink
        style={
          isActive('/dashboard/trading')
            ? activeLinkStyles
            : notActiveLinkStyles
        }
        to="/dashboard/trading"
      >
        <DashboardLink headerTitle="Trading" comingSoon />
      </NavLink>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          border: '1px solid grey',
          color: 'white',
          height: '50%',
          my: 'auto',
        }}
      />
      <NavLink
        style={
          isActive('/dashboard/automation')
            ? activeLinkStyles
            : notActiveLinkStyles
        }
        to="/dashboard/automation"
      >
        <DashboardLink headerTitle="Automation" comingSoon />
      </NavLink>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          border: '1px solid grey',
          color: 'white',
          height: '50%',
          my: 'auto',
        }}
      />
      <NavLink
        style={
          isActive('/dashboard/portfolio')
            ? activeLinkStyles
            : notActiveLinkStyles
        }
        to="/dashboard/portfolio"
      >
        <DashboardLink headerTitle="Portfolio" comingSoon />
      </NavLink>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          border: '1px solid grey',
          color: 'white',
          height: '50%',
          my: 'auto',
        }}
      />
      <NavLink
        style={
          isActive('/dashboard/alerts')
            ? activeLinkStyles
            : notActiveLinkStyles
        }
        to="/dashboard/alerts"
      >
        <DashboardLink headerTitle="Alerts" />
      </NavLink>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{
          border: '1px solid grey',
          color: 'white',
          height: '50%',
          my: 'auto',
        }}
      />
      <NavLink
        style={
          isActive('/dashboard/training')
            ? activeLinkStyles
            : notActiveLinkStyles
        }
        to="/dashboard/training"
      >
        <DashboardLink headerTitle="Training" />
      </NavLink>
    </Box>
  );
};

export default DashboardNav;
