import './header.css'

function Header() {
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