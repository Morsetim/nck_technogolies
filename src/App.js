import React, {useState} from 'react'
import Navbar from './components/navbar'
import './App.css';
import Form from './components/form'
import PaymentInfo from './components/paymentInfo';
import CreditCard from './components/creditCard';
import Visa from './images/visa.png';
import Discover from './images/discover.png';
import Paypal from './images/Paypal.png';


function App() {
const [cardNumber, setCardNumber] = useState('');
const [date, setDate] = useState('');
const [security, setSecurity] = useState('');
const [postal, setPostal] = useState('');



const handleCardNumber = e => {
  const space = [4,9,14];
   let value = e.target.value;
   const check = value.replace(/ /g, '');
   if (!isNaN(Number(check)) && value.length < 20) {
    if(space.includes(value.length)){
      value = value + " "
    }
    setCardNumber(value)
  }
}

const handleSecurityCode = e => {
  let value = e.target.value;
  if(!isNaN(Number(value)) && value.length < 4){
    setSecurity(value)
  }
}

const handlePostalCode = e => {
  let value = e.target.value;
  if(!isNaN(Number(value)) && value.length < 6) {
    setPostal(value)
  }
}

const handleDateChange = e => {  
   let value = e.target.value;
   if(value.trim().length > 5) return;

   if(!isNaN(Number(value)))return;
  
   if(value.length === 1 && value > 1){
      setDate('0'+ value + '/') ;
      return;
   }

   if(value.length === 2 ){
     if( value > 12){
      setDate('12/');
     }else{
      setDate(value + '/');
     }
    return;
 }
 if(value.length === 4 && value.substr(3, 1) > 3){
  setDate(value.substr(0,3) + 31) ;
  return;
}

if(value.length === 5 && value.substr(4, 1) > 1){
  setDate(value.substr(0,4) + 1) ;
  return;
}
setDate(value)
}

const handleKeydown = e => {
  let value = e.target.value;
  if(e.keyCode === 8  && value.endsWith(' ')){
    value= value.trim();
    setCardNumber(value)
    
  }
  if(e.keyCode === 8  && value.endsWith('/')){
    console.log(value, '---')
    value= value.replace('/', '');
    setDate(value)
  }
}

  return (
    <div className="">
     <Navbar />
     <div className='wrapper'>
     <section>
       <div className='header'>
         <div>
           <h2>Payment Information</h2>
           <p>Choose your method of payment.</p>
          </div>
          <div className='logos'> 
          <img alt="visa" src={Visa} alt='visa'/>
          <img alt="discover" src={Discover} alt='dd' className='discover'/>
          <img alt="paypal" src={Paypal} alt='pp'/>
          </div>
       </div>
       <div className='card-wrapper'>
         <CreditCard 
         cardNumber={cardNumber}
         date={date}
         />
         <Form 
         handleCardNumber ={handleCardNumber} 
         cardNumber={cardNumber} 
         handleKeydown={handleKeydown}
         handleDateChange={handleDateChange}
         date={date}
         handleSecurityCode={handleSecurityCode}
         securityCode={security}
         handlePostalCode={handlePostalCode}
         postalCode={postal}
         />
       </div>
      </section>
     <PaymentInfo subTotal="2,497.00" tax="119.64" code="Z4KXLM9A" promationAmount="-60.00"/>
     <div className="payment">
      <button className="payment-btn">Complete payment</button>
      <h2>TOTAL: <span>₦2556.64</span></h2>    
     </div>
     </div>
    </div>
  );
}

export default App;
