import './styles.scss'
import { Link } from 'react-router-dom'
export function Header() {

  return (
    <div className="header">
      <Link to="/personWebsite">
        <a className="logoName">@digoarthur</a>
      </Link>
      <nav className="navigation">
        <Link className="aboutLink" to="/sobre">
          <span>SOBRE</span>
        </Link>
        <span>PROJECTS</span>
        <span>SETUP</span>
      </nav>
    </div>
  )
}