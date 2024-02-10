import PropTypes from 'prop-types';
import { useState } from 'react';
import InputIcon from '../assets/Vector.png';
// import Checkmark from '../assets/checkmark.png';

const Dropdown = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  note,
}) => {
  // added placeholder as a props just incase we would like to add ones ^_^
  const [isFocused, setIsFocused] = useState(false);

  const toggleFocus = () => {
    setIsFocused(!isFocused);
  };

  const arrowDirection = isFocused ? 'M5 15l7-7 7 7' : 'M5 5l7 7 7-7';

  return (
    <div className="drop-down mb-10 mt-10">
      <label className="block mb-2 text-md font-medium  text-gray-200">
        {label}
      </label>
      <div className="dropdown-input relative">
        <div className="icon-container">
          <img src={InputIcon} alt="checkmark icon" />
        </div>
        <select
          className="w-full text-neutral-400 font-light text-sm px-8 py-2 rounded appearance-none"
          value={value}
          onChange={onChange}
          onFocus={toggleFocus}
          onBlur={toggleFocus}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <>
              {/* <svg src={Checkmark} alt="checkmark icon" /> */}
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            </>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
          <svg
            className="fill-current h-4 w-4 transform"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={arrowDirection}></path>
          </svg>
        </div>
      </div>
      <p className="note text-neutral-500 mt-2">{note}</p>
    </div>
  );
};
Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  note: PropTypes.string,
};
export default Dropdown;
