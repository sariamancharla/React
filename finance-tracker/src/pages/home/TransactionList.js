// styles
import styles from './Home.Module.css'
import { useFireStore } from '../../hooks/useFireStore'

export default function TransactionList({transactions}) {
    const {deleteDocument}=useFireStore('transactions')

  return (
    <div>
        <ul className={styles.transactions}>
        {transactions.map((transaction)=>
            <li key={transaction.id}>
                <p className={styles.name}>{transaction.name}</p>
                <p className={styles.amount}>{transaction.amount}</p>
                <button onClick={()=>deleteDocument(transaction.id)}>X</button>
            </li>
        )}
        </ul>
    </div>
  )
}
