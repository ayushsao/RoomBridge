import React, { useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const DropdownFilter = ({ label, type, options, selected, setSelected, isOpen, toggleDropdown, closeDropdown, icon: Icon }) => {
  const dropdownRef = useRef();

  const handleSliderChange = (e) => {
    setSelected([e.target.valueAsNumber, selected[1]]);
  };

  const handleSliderChange2 = (e) => {
    setSelected([selected[0], e.target.valueAsNumber]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeDropdown]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
      >
        <span className="flex items-center">
          <Icon className="w-5 h-5 mr-2 text-red-300" />
          {type === 'select' ? selected : label}
        </span>
        {isOpen ? <ChevronUpIcon className="w-4 h-4 ml-2 -mr-1 text-gray-500" /> : <ChevronDownIcon className="w-4 h-4 ml-2 -mr-1 text-gray-500" />}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 px-2">
          <div className="py-1">
            {type === 'select' &&
              options.map((option) => (
                <button
                  key={option}
                  className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                    selected === option ? 'bg-red-300 rounded-md font-semibold text-gray-500' : ''
                  }`}
                  onClick={() => {
                    setSelected(option);
                    closeDropdown();
                  }}
                >
                  {option}
                </button>
              ))}
            {type === 'slider' && (
              <div className="px-4 py-2">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={selected[0]}
                  onChange={handleSliderChange}
                  className="w-full text-red-300"
                />
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={selected[1]}
                  onChange={handleSliderChange2}
                  className="w-full mt-2 text-red-300"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{selected[0]}</span>
                  <span>{selected[1]}</span>
                </div>
              </div>
            )}
            {type === 'date' && (
              <DatePicker
                selected={selected}
                onChange={(date) => {
                  setSelected(date);
                  closeDropdown();
                }}
                className="w-full px-2 cursor-pointer text-sm"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;
