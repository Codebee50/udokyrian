import { BiMenuAltRight } from 'react-icons/bi';
import { navLinks } from '../constants'
// import { HiMenuAlt3  } from "react-icons/hi";


const Nav = () => {
  return (
    <header className='flex flex-row items-center justify-between bg-deep-background max-container py-5 sticky top-0 z-10'>
      <a href="#"><svg width={30} height={30} className='smooth-transition hover:scale-hover fill-vibrant'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.97 48.81"><defs></defs><title>Code bee</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle cx="52.79" cy="11.18" r="11.18"/><circle cx="11.18" cy="37.04" r="11.18"/><path d="M56.57,23.79a13,13,0,0,1-14.86-21A23.92,23.92,0,0,0,8.87,22.57a14.22,14.22,0,0,1,2.45-.21A14.78,14.78,0,0,1,22.66,46.62,23.93,23.93,0,0,0,56.59,24.9C56.59,24.53,56.58,24.16,56.57,23.79Z"/></g></g></svg></a>

        <ul className='flex flex-row items-center gap-10 max-sm:hidden'>
            {
                navLinks.map((link)=> (
                    <li key={link.label} className='text-vibrant-txt-color font-manrope hover:text-complement-color smooth-transition'><a href={link.href}>{link.label}</a></li>
                ))
            }
        </ul>

        <a target='_blank' rel='noreferrer' href="https://docs.google.com/document/d/1S8VsNTLAohgtdjcjx8lCkk4S4aBGRXSChMnHBlm11IE/edit?usp=sharing"><button  className='max-sm:hidden text-vibrant-txt-color bg-deep-background px-3 py-2 rounded-full text-sm font-manrope smooth-transition hover:bg-complement-color hover:text-deep-background flex items-center gap-2'>Resume <i className="ri-download-line"></i></button></a>            
        <div className='sm:hidden'>
          <BiMenuAltRight  className='fill-complement-color' size={'2.3em'}/>
        
        </div>
    </header>
  )
}

export default Nav