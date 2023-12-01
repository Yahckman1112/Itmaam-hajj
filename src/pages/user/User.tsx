

import { Route, Routes } from 'react-router-dom';
import SideNav from './components/sideNav';
import Dashboard from './pages/dashboard/dashboard';
import { FaAccessibleIcon } from 'react-icons/fa';

function User() {
  return (
    <div className='lg:flex h-screen py-10' >
    <div className=' w-64 mr-4 hidden lg:block'>
      < SideNav/>
      </div>  
      <div className='block lg:hidden'>< FaAccessibleIcon /> </div>

      <div className='max-h-screen overflow-y-scroll  p-6 bg-[#FCFFF5]'>
       < Routes>
       < Route path='/' element={< Dashboard />} />
       </Routes>
        </div>    
    </div>
  )
}

export default User