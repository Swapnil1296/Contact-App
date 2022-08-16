import React from 'react';
import { Link } from 'react-router-dom';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';

const Navbar = () => {
  return (
    <>
      <nav className=" navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <Link to={'/'} className="navbar-brand">
            
            <StayCurrentPortraitIcon className='text-warning' /> Contact <span className='text-warning'>Manager</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
