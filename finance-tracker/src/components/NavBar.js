import { Link } from 'react-router-dom'
//styles
import styles from './NavBar.Module.css'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
        </ul>
    </nav>
  )
}
