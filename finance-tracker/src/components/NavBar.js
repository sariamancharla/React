import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
//styles
import styles from './NavBar.Module.css'

export default function NavBar() {
  const{logout}=useLogout()
  const {user}=useAuthContext()
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}><Link to="/">Finance Tracker</Link></li>
            {!user && 
              (<>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
              
              </>
              )}
          {user && (
            <>
              <li>Hello,{user.displayName}</li>
              <li>
                <button className='btn' onClick={logout}>Logout</button>
              </li>
            </>
          )}
        </ul>
    </nav>
  )
}
