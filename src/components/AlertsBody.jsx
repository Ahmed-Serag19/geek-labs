// import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Ticker from '/assets/ticker 1.png';
import Risk from '/assets/risk 1.png';
import Contract from '/assets/contract 1.png';
import Volume from '/assets/volume 1.png';
const AlertsBody = ({ alerts }) => {
  // const [expandedAlert, setExpandedAlert] = useState(null);

  // const handleAlertClick = (alertId) => {
  //   setExpandedAlert(expandedAlert === alertId ? null : alertId);
  // };
  // Here also i couldve done a reusable component to hold the top part of the
  // clickable alert that contain info like contract etc etc
  console.log(alerts);
  return (
    <div className="alerts-body text-white">
      {alerts.map((alert) => (
        <>
          <div
            key={alert.id}
            className={`alert-item ${
              alert.active ? 'active-bg' : ''
            }`}
          >
            {alert.active && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',

                  borderColor: 'divider',
                  borderRadius: 2,
                  color: 'white',
                  paddingX: 2,
                  marginX: 2,

                  height: 55,
                }}
              >
                <span className="flex justify-center items-center">
                  <img src={Ticker} alt="dollar icon" />
                  {alert.ticker}
                </span>
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
                <span className="flex justify-center items-center">
                  <img src={Contract} alt="contract icon" />
                  {alert.contracts} contracts
                </span>
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
                <span className="flex justify-center items-center">
                  <img src={Volume} alt="volume icon" />
                  {alert.volume}%
                </span>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    border: '1px solid grey',
                    color: 'white',
                    height: '50%',
                    my: '5',
                  }}
                />
                <span className="flex justify-center items-center">
                  <img src={Risk} alt="risks icon" />
                  {alert.risk}
                </span>
              </Box>
            )}
            <p>{alert.message}</p>
          </div>
        </>
      ))}
    </div>
  );
};

AlertsBody.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      industry: PropTypes.string,
      marketCap: PropTypes.string,
      risk: PropTypes.string,
    })
  ).isRequired,
};

export default AlertsBody;
