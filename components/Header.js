import Image from 'next/image'
import { 
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon, 
  UserIcon
} from '@heroicons/react/solid'

export default function Header(){
  return(
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
      {/* Logo */}
      <div className='relative flex items-center h-10 cursor-pointer'>
        <Image
          src="https://links.papareact.com/qd3"
          alt='logo airbnb'
          fill
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* Search */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input 
          className='flex-grow pl-5 bg-transparent outline-none text-sm'
          type="text" 
          placeholder='Start your search'
        />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
      </div>

      {/* Account */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p>Become a host</p>
        <GlobeAltIcon className='h-6'/>

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6'/>
          <UserCircleIcon className='h-6'/>
        </div>

      </div>
    </header>

  )
}