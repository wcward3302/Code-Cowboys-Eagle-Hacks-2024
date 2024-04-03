import Link from 'next/link';
import NavLinks from './navlinks';
import Logout from '@/app/logout';

export default function SideNavBar() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
          
          <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            <NavLinks />
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
              <Logout />
          </div>
        </div>
      );
}