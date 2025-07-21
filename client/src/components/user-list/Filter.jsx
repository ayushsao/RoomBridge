import React, { useState } from 'react';
import DropdownFilter from './DropdownFilter';
import { UserIcon, MapIcon, CurrencyDollarIcon, CalendarIcon } from '@heroicons/react/24/solid';

const Filter = ({ setFilters }) => {
  const [gender, setGender] = useState('Both');
  const [location, setLocation] = useState('Nearby');
  const [rent, setRent] = useState([]);
  const [date, setDate] = useState();
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeOtherDropdowns = () => {
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  const applyFilters = () => {
    setFilters({
      gender,
      location,
      rent,
      date,
    });
  };

  return (
    <div className="flex gap-4 flex-wrap items-center">
      <DropdownFilter
        label="Gender"
        type="select"
        options={['Male', 'Female', 'Both']}
        selected={gender}
        setSelected={setGender}
        isOpen={openDropdown === 'gender'}
        toggleDropdown={() => toggleDropdown('gender')}
        closeDropdown={closeOtherDropdowns}
        icon={UserIcon}
      />
      <DropdownFilter
        label="Location"
        type="select"
        options={['Nearby', 'Delhi', 'Mumbai','Delhi','Udaipur']}
        selected={location}
        setSelected={setLocation}
        isOpen={openDropdown === 'location'}
        toggleDropdown={() => toggleDropdown('location')}
        closeDropdown={closeOtherDropdowns}
        icon={MapIcon}
      />
      {/* <DropdownFilter
        label="Rent"
        type="slider"
        selected={rent}
        setSelected={setRent}
        isOpen={openDropdown === 'rent'}
        toggleDropdown={() => toggleDropdown('rent')}
        closeDropdown={closeOtherDropdowns}
        icon={CurrencyDollarIcon}
      /> */}
      {/* <DropdownFilter
        label="Date"
        type="date"
        selected={date}
        setSelected={setDate}
        isOpen={openDropdown === 'date'}
        toggleDropdown={() => toggleDropdown('date')}
        closeDropdown={closeOtherDropdowns}
        icon={CalendarIcon}
      /> */}
      <button onClick={applyFilters} className="bg-red-300 hover:bg-red-400 text-white px-2 py-1.5 rounded-md">
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
