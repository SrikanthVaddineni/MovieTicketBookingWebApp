import {Link} from 'react-router-dom'

import {AiOutlineMenu} from 'react-icons/ai'
import './index.css'

const Header = () => (
  <div className="nav-bar-card">
    <Link to="/">
      <img
        src="https://economictimes.indiatimes.com/thumb/msid-78623207/bookmyshow.jpg?from=mdr"
        alt="app logo"
        className="nav-logo-img"
      />
    </Link>
    <AiOutlineMenu />
  </div>
)

export default Header
