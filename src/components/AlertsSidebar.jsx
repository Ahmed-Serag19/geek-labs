import Dropdown from './Dropdown';
import PropTypes from 'prop-types';

const AlertsSidebar = ({
  industryOptions,
  industry,
  setIndustry,
  marketCap,
  setMarketCap,
  marketCapOptions,
  risk,
  setRisk,
  riskOptions,
  handleSubmit,
}) => {
  return (
    <div className="  p-4 rounded-lg text-white alerts-sidebar ms-5 mt-6">
      <div className="mt-10  header font-bold text-3xl pb-5 text-center">
        Filters
      </div>

      <Dropdown
        label="Industry"
        options={industryOptions}
        value={industry}
        onChange={(e) => setIndustry(e.target.value)}
        placeholder=""
        note="Choose something"
      />

      <Dropdown
        label="Market Cap"
        options={marketCapOptions}
        value={marketCap}
        onChange={(e) => setMarketCap(e.target.value)}
        placeholder=""
        note="Press Apply to see changes."
      />

      <Dropdown
        label="Risk"
        options={riskOptions}
        value={risk}
        onChange={(e) => setRisk(e.target.value)}
        placeholder=""
        note="choose risks"
      />

      <button
        className="w-full  rounded  focus:outline-none focus:ring"
        onClick={handleSubmit}
      >
        Apply Filters
      </button>
    </div>
  );
};
AlertsSidebar.propTypes = {
  industryOptions: PropTypes.array.isRequired,
  industry: PropTypes.string.isRequired,
  setIndustry: PropTypes.func.isRequired,
  marketCapOptions: PropTypes.array.isRequired,
  marketCap: PropTypes.string.isRequired,
  setMarketCap: PropTypes.func.isRequired,
  riskOptions: PropTypes.array.isRequired,
  risk: PropTypes.string.isRequired,
  setRisk: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AlertsSidebar;
