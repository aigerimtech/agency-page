import { NavLink } from 'react-router-dom';
import Button from '../button'


const NavBar = ()=>{
    return(
    <nav className='flex items-center justify-between pt-4 pl-[166px]'>
        <div className="flex gap-20 items-center">
          <a href='/' className= 'font-bold text-lg '>Brainwave.io</a>
          <ul className='flex gap-9 font-bold'>
            <NavLink to=''><li>Demo</li></NavLink>
            <NavLink to='/pages'><li>Pages</li></NavLink>
            <NavLink to='/posts'><li>Posts</li></NavLink>
            <NavLink to='/support'><li>Support</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
           
          </ul>
        </div>
        <Button name='Get started a project'/>
     
    </nav>   
    
    )
}

export default NavBar;