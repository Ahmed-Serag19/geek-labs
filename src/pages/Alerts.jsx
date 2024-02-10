import { useState } from 'react';
import AlertsSidebar from '../components/AlertsSidebar';
import AlertsBody from '../components/AlertsBody';

const Alerts = () => {
  const [industry, setIndustry] = useState('');
  const [marketCap, setMarketCap] = useState('');
  const [risk, setRisk] = useState('');
  // Here we are going to define a state that will held
  // the data of alerts that we can send to the alert body
  // but im not going to do that but im just saying the idea

  const alertData = [
    {
      id: 1,
      active: true,
      ticker: '$TSLA',
      contracts: '200',
      message:
        'Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.',
      volume: '12.2',
      risk: 'High risk',
    },
    {
      id: 2,

      message:
        'X company released a short report on $XYZ, High IV option sales opps',
    },
    {
      id: 3,

      message:
        'SXYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails.',
    },
    {
      id: 4,

      message:
        'SXYZ just announced a divestiture of $DEF at $X. This may indicate a distribution opportunity, with the potential gain being %X if the deal goes through, but there is a %Y risk if the deal falls through.',
    },
    {
      id: 5,

      message:
        '$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.',
    },
    {
      id: 6,

      message:
        '$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.',
    },
    {
      id: 7,

      message:
        '$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.',
    },
  ];

  const industryOptions = [
    { value: 'healthcare', label: 'Health Care' },
    // ...other options
  ];

  const marketCapOptions = [
    { value: 'large', label: 'Large-cap' },
    // ...other options
  ];

  const riskOptions = [
    { value: 'low', label: 'Low risk' },
    { value: 'mid', label: 'Mid risk' },
    { value: 'high', label: 'High risk' },
    { value: 'option', label: 'Option text here' },
    // ...other options
  ];

  const getFilteredAlerts = () => {
    return alertData.filter((alert) => {
      return (
        (!industry || alert.industry === industry) &&
        (!marketCap || alert.marketCap === marketCap) &&
        (!risk || alert.risk === risk)
      );
    });
  };

  const handleSubmit = () => {
    // Handle the submission of filters here
    console.log(getFilteredAlerts());
  };

  return (
    <div className="alerts flex  p-5 gap-x-10">
      {/* here we have to do a prop drilling since we are not dealing with a global
      state management library like Redux or MobX or even useContext
      also i would like to add something regarding the dropdown i know its 
      custom component not the normal option and select but i did it like 
      this because i didnt have enough time due to real life  obligations */}
      <AlertsSidebar
        riskOptions={riskOptions}
        marketCapOptions={marketCapOptions}
        industryOptions={industryOptions}
        handleSubmit={handleSubmit}
        setIndustry={setIndustry}
        setMarketCap={setMarketCap}
        setRisk={setRisk}
        industry={industry}
        risk={risk}
        marketCap={marketCap}
      />
      <AlertsBody alerts={alertData} />
    </div>
  );
};

export default Alerts;
