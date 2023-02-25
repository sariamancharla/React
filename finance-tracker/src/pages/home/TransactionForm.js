import { useState,useEffect } from "react"
import { useFireStore } from "../../hooks/useFireStore"

export default function TransactionForm({uid}) {
    const [name,setName]=useState('')
    const [amount,setAmount]=useState('')//always type string
    const {addDocument,response}=useFireStore('transactions')
    const handleSubmit=(e)=>{
        e.preventDefault()
        addDocument(
            {
                uid,//uid:uid
                name,
                amount,
            }
        )
       
    }

    useEffect(()=>{
        if(response.success)
        {
            setName('')
            setAmount('')
        }
    },[response.success])

    return (
        <>
            <h3>Add a Transaction</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Transaction Name:</span>
                    <input 
                        type="text" 
                        required
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                    />
                    <input 
                        type="number" 
                        required
                        onChange={(e)=>setAmount(e.target.value)}
                        value={amount}
                    />
                </label>
                <button>Add Transaction</button>
            </form>
        </>
  )
}
