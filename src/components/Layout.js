import { Link } from 'react-router-dom'
import ContactForm from './contactForm'
import Navbar from './navbar'


const Layout=({children})=>{
    return(
        <div>
           <header className='w-screen h-[801px] bg-[#F7F4FA]'>
           <div className='container mx-auto'>
           <Navbar/>
           <div className='flex justify-between items-center pt-[100px]'>
           <div className='flex flex-col gap-9 w-5/12 ml-[200px]'>
           <span className='text-[#F64B4B] font-bold capitalize text-sm'>Let’s shift your business</span>
           <h1 className='font-bold text-[60px] text-[#161C2D]' style={{lineHeight:'50px'}} >Shift your business fast with Shade Pro.</h1>
           <p className='text-[#161C2D] text-lg font-bold'>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
          </div>
          <div>
            <div className='w-[463px] h-[463px] bg-gray-500 rounded-full ]'>
              <img src="./Oval.png"/>

            </div>
          </div>
        </div>
        <ContactForm/>
        <Link to="/posts">link</Link>

      </div> 
      </header>
           {children}
        </div>
    )
}

export default Layout