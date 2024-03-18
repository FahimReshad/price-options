import { useState } from "react";
import Links from "../Links/Links";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' }
      ];
    return (
        <nav>
            <div className="md:hidden text-4xl" onClick={()=> setOpen(!open)}>
                {
                    open === true ?
                    <IoMdCloseCircleOutline /> 
                     : <RiMenu2Line></RiMenu2Line>
                }           
            </div>
            <ul className={`md:flex gap-6 absolute md:static duration-1000 ${open? 'top-16': '-top-32'}`}>
            {
                routes.map(route => <Links key={route.id} route={route}></Links>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;