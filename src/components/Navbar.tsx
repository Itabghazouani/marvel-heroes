import { NavLink, Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="wrapper no-padding">
      <header>
        <Link to="/" className="logo"><span>MARVEL</span> HEROES</Link>

        <nav>
          <img src="../../assets/menu.svg" className="menu" id="menu-btn" alt="open menu"/>

          <ul className="nav" id="nav">
            <li className="exit" id="exit-btn">
                <button><img src="../../assets/exit.svg" alt=''/></button>
            </li>
            <li className="active"><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
