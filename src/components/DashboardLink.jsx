import PropTypes from 'prop-types';

const DashboardLink = ({ headerTitle, comingSoon }) => {
  return (
    <div className="dashboard-link">
      <h1>{headerTitle}</h1>

      {comingSoon && (
        <div className="status-container">
          <span>coming soon</span>
        </div>
      )}
    </div>
  );
};

DashboardLink.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  comingSoon: PropTypes.bool,
};

export default DashboardLink;
