import './styles.scss'

export function Header() {

  return (
    <div className="header">
      <a className="logoName">@digoarthur</a>
      <nav className="navigation">
        <span>ABOUT</span>
        <span>PROJECTS</span>
        <span>SETUP</span>
      </nav>
    </div>
  )
}