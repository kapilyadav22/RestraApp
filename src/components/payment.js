import React, { useState } from 'react';
// import Razorpay from 'razorpay';

const Payment =  () => {

  const [paymentMessage, setPaymentMessage] = useState('');

//   const openRazorpay = async () => {
//     const options = {
//       key: 'YOUR_RAZORPAY_KEY_ID',
//       amount: 10000, 
//       // amount in paisa (e.g., ₹1000 = 10000 paisa)
//       currency: 'INR',
//       name: 'Your Company Name',
//       description: 'Payment for your product',
//       image: '/path/to/your/logo.png',
//       handler: (response) => {
//         console.log(response); 
//         setPaymentMessage(response.razorpay_payment_id ? 'Payment Successful' : 'Payment Failed');
//       },
//       prefill: {
//         name: 'John Doe',
//         email: 'john@example.com',
//         contact: '9999999999'
//       },
//       theme: {
//         color: '#F37254'
//       }
//     };

//     const razorpay = new Razorpay(options);
//     razorpay.open();
//   };

  return (
    <div>
      <button >Pay with Razorpay</button>
      {paymentMessage && <p>{paymentMessage}</p>}
    </div>
  );
};


export default Payment;