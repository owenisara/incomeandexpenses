import { useState,useEffect  } from 'react';
import'./FormComponent.css'
import{ v4 as uuidv4} from 'uuid';
const FormComponent=(props)=>{
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const[formValid,setformValid]=useState(false)
    const inputtitle=(event)=>{
       setTitle(event.target.value)
    }
    const inputAmount=(event)=>{
       setAmount(event.target.value)
    }
    const  saveItem =(event)=>{
        event.preventDefault()
        const itemdata = {
            id: uuidv4(),
            title:title,
            amount :Number(amount) }
            props.onAddItem(itemdata)
            setTitle('')
            setAmount(0)

    }
 useEffect(()=>{
    const checkData = title.trim().length>0 && amount !==0
            setformValid(checkData)   
 },[title,amount])

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="from-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputtitle} value={title}/>       
                </div>
                <div className="from-control">
                    <label>จำนวนเงิน</label> 
                    <input type="number" placeholder="(+ รายรับ , -ราบจ่าย )"onChange={inputAmount} value={amount}/>       
                </div>
                <div>
                    <button className='btn' type="submit" disabled={!formValid}>เพิ่มข้อมูบล</button>
                </div>



            </form>
        </div>
    )

}

export default FormComponent