import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Alerts from './pages/Alerts';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="alerts" element={<Alerts />} />
          <Route path="trading" element={<Trading />} />
          <Route path="automation" element={<Automation />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="training" element={<Training />} />
        </Route>
      </Routes>
    </>
  );
}
const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-white text-4xl flex justify-center items-center">
          Home
        </h1>
        <Link
          to="/dashboard"
          className="btn bg-orange-600  text-white p-3 mt-5 rounded"
        >
          <button>Dashboard</button>
        </Link>
      </div>
    </>
  );
};

export const Trading = () => {
  return <h1 className="text-white">Trading Coming Soon</h1>;
};
export const Automation = () => {
  return <h1 className="text-white">Automation Coming Soon</h1>;
};
export const Portfolio = () => {
  return <h1 className="text-white">Portfolio Coming Soon</h1>;
};
export const Training = () => {
  return <h1 className="text-white">Training sample page</h1>;
};
export default App;
