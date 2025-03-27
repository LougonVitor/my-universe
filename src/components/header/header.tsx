import { useEffect } from 'react'
import { animationHeader } from './header';
import './header.css'


function Header() {
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > window.innerHeight) {
        animationHeader('header-on', 'header-off');
      }else {
        animationHeader('header-off', 'header-on');
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <header id='header'>
        <section id='title-section'>
          <h1>Vítor <span>Lougon</span></h1>
        </section>
        <section id='menu-section'>
          <nav id='nav-menu'>
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  )
}

export default Header