import { useState } from 'react'

// styles
import styles from './SignUp.Module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayname] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password,displayName)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Sign Up</h2>
      <label>
        <span>email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input 
            type="text" 
            onChange={(e)=>setDisplayname(e.target.value)}
            value={displayName}
        />
      </label>
      <button className="btn">Sign Up</button>
    </form>
  )
}