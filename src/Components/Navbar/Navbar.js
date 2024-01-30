import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Navbar = () => {
  const [cookies, removeCookie] = useCookies(['loggedIn']);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('loggedIn');
    navigate('/');
  };

  return (
    <>
      <nav className='sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-25 border-b border-gray-200  max-sm:max-w-full'>
        <div className='flex justify-between px-4 max-md:w-full sm:min-w-fit'>

          <div className='justify-between h-16 pt-3'>
            <span className='text-white font-semibold'>Logo</span>
          </div>

          <div className='flex text-white justify-end pt-4'>
            <ul className='flex space-x-5 max-sm:hidden'>

              <li className='hover:font-normal font-light'>
                <button className=''>About</button>
              </li>
              <li className='hover:font-normal font-light'>
                <button className=''>Contact Us</button>
              </li>
              <li>
                <Button onClick={handleLogout} className='text-sm'>
                  Log out
                </Button>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
