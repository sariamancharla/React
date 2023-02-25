import { useAuthContext } from '../../hooks/useAuthContext'
//styles
import styles from './Home.Module.css'

//components
import TransactionForm from './TransactionForm'


export default function Home(){
    const {user}=useAuthContext()
    console.log(user.uid)
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                Transaction List
            </div>
            <div className={styles.sidebar}>
                <TransactionForm uid={user.uid}/>
            </div>
        </div>
    )
}
