
import { DarkMode } from './DaarkMode'
import DropdownList from './DropdownList'
import Logo from './Logo'
import Search from './Search'

const Navbar = async () => {
  return (
    <nav>
      <div className='container flex flex-col justify-between py-8 sm:flex-row sm:items-center gap-4 sm:flex  '>

        {/* Logo */}
        <Logo/>

        {/* Search */}
        <Search/>

        {/* Dark mode && Profile */}
        <div className='flex gap-3'>
        <DarkMode/>
        <DropdownList />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
