// PaymentPage.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Payment.css';


const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle payment submission logic here
    console.log('Payment submitted:', {
      cardNumber,
      expiryDate,
      cvv
    });
    // Redirect to status page after successful payment
    // Replace '/status' with the actual path to your status page
    // history.push('/status');
  };

  return (
    <div className="payment-container">
   
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />

        <label htmlFor="expiryDate">Expiry Date</label>
        <input type="text" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />

        <label htmlFor="cvv">CVV</label>
        <input type="text" id="cvv" value={cvv} onChange={(e) => setCVV(e.target.value)} required />

        <div className="button-container">
          <Link to="/status" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold mr-4">Pay Now</Link>

        </div>
      </form>
   
    </div>
  );
};

export default Payment;

// Link to="/form" className="border border-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold">Edit Info</Link> 