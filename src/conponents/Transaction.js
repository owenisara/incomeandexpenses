import Item from './item';
const Transaction=(props)=>{
    const{items} = props

     return(
          <div>
          <ul className='item-list'> 
             {items.map((element)=>{
               return   <Item {...element} key={element.id}/>
                     // แบบสั่น Space Operlater ชื่อ  propaty  เหมือนกัน ถึงใช้งานได้     
                     // {uuidv4()
                     //<Item title={element.title}amount={element.amount}  key={element.id}/>;
                 })}          
            </ul>  
            </div>
            )
   }
   
export default Transaction 