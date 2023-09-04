import './App.css';
import './conponents/item.css'
import FormComponent from './conponents/FormComponent';
import Transaction from './conponents/Transaction';
import { useState,useEffect } from 'react';
import DataContext from './data/dataContext';
import ReportComponent from './conponents/ReportComponent';
import{BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";
function App() {
  const design ={color:"red",textAlign:"center",fontSize:'1.5rem'}
  const initData = [
    {id:1,title:'ค่าเช้าบ้าน',amount:-5000},
    {id:2,title:'ค่ารถ',amount:-3000},
    {id:3,title:'เงินเดือน',amount:30000},
  ]
  const[items,setItens]=useState(initData)
  const[reportIncome,setReportIncome]=useState(0)
  const[reportExpense,setReportexpense]=useState(0)
  const onAddNewItem = (newItem)=>{
    setItens((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
    setReportIncome(income.toFixed(2))
    setReportexpense(expense.toFixed(2))
  },[items,reportIncome,reportExpense])
  return (
   
   <DataContext.Provider value={{income:reportIncome,expense:reportExpense}}>
     <div className='container'>
      <h1 style={design}>แอปบัญชีรายรับ-รายจ่าย</h1>
      <Router>
      <div>
        <ul className='horizontal-menu'>
          <li> <Link to="/">ข้อมูลบัญชี</Link></li>
          <li><Link to="/insert">บันทึกข้อมูลบัญชี</Link></li>
        </ul>
           <Switch>
        <Route path="/" exact>
              <ReportComponent/>
             </Route>
             
          <Route path="/insert">  
          <FormComponent onAddItem={onAddNewItem}/>
        <Transaction  items={items}/></Route>
        </Switch>
      </div>
      </Router>
    </div>
   </DataContext.Provider>
  );
}

export default App;
