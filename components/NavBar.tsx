import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
   

   return (
      <nav className='cr-bg-primary flex w-full h-24 items-center justify-center'>
         <Link href={'/'}>
            <img className='w-20' src="/images/logo_white.png" alt="logo" />
         </Link>
      </nav>
   );
}

export default NavBar;