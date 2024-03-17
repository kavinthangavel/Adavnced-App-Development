// PaymentPage.jsx

import { useState } from 'react';
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

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
