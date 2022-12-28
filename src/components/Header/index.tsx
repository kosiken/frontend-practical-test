/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react';
import Button from '../Button';
import { Icon } from '../Icon';
import { IconNames } from '../Icon/icons';



const Header = () => {

    const links = [{
        label: 'Home',
        href: '/'
    
    }, 

    {
        label: 'About us',
        href: '#'
    },
    {
        label: 'Services',
        href: '#'
    }, 

]
const [navOpen, setNavOpen] = useState(false);


const toggleNav = () => {
    setNavOpen(!navOpen);
}

    return (
        <header className="flex w-full flex-wrap justify-between px-8 items-center content-center">
            <div className="flex-1 w-full">
                <Icon viewBox="0 0 126 54" name={IconNames.LOGO} size={{
                    width: 126,
                    height: 54
                }} />
            </div>
            <button onClick={toggleNav} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <Icon name={IconNames.HAMBURGER} />
    </button>

            <div className="w-full lg:w-auto flex-grow md:block">
            <div className={(navOpen ? 'block' : 'hidden') + " lg:flex lg:space-x-8 items-center justify-end"}>
                {links.map((li, index) => (
                  
                        <a key={`link-${index}`} className="block ml-0 mt-4 lg:mt-0 lg:inline-block lg:mt-0 hover:text-primary" href={li.href}>
                            {li.label}
                        </a>
          
                ))}
            
                    <a href="#" className="block ml-0 mt-4 lg:mt-0 lg:inline-block lg:mt-0 ">
                        <Button variant="secondary">
                            <span>Our teams</span>
                        </Button>
                    </a>
        

               
                    <a href="#" className="block ml-0 mt-4 lg:mt-0 lg:inline-block lg:mt-0 ">
                        <Button variant="primary">
                            <span>Contact us</span>
                        </Button>
                    </a>
                
            </div>
            </div>
        </header>
    )
}

export default Header;