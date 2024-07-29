import React from 'react';
import '../Assert/CancellationRefundPolicy.css';

const CancellationRefundPolicy = () => {
  return (
    <div className="policy-section">
      <h1 className="policy-title">Cancellations & Refunds Policy</h1>

      <section className="cancellation-policy">
        <h2 className="section-title">Cancellation Policy:</h2>
        <ul>
          <li>✓ If cancellation occurs more than 48 hours before the experience, you will receive a full 100% refund</li>
          <li>✓ Cancellations made between 24 and 48 hours before the event will be eligible for a 70% refund</li>
          <li>✓ If cancellation occurs between 6 and 24 hours before the experience, you will receive a 50% refund</li>
          <li>✓ Unfortunately, cancellations made less than 6 hours before the event will not be eligible for a refund</li>
        </ul>
      </section>

      <section className="refund-policy">
        <h2 className="section-title">Refund Policy:</h2>
        <p className="highlight">WHAT ABOUT REFUNDS AFTER CANCELLATION?</p>
        <ul>
          <li>✓ If the vendor did not show up after the booking amount is paid, on those unfortunate occasions we do refund 2x (2 times) the booking amount if only online payment is done through partone.in</li>
          <li>✓ The refund amount for the service orders paid via online or credit/debit card will be refunded within 2-5 working days from the date of initiating the refund through the online account</li>
          <li>✓ Please carefully review the Cancellation and Refund policies before making a purchase, as you will be held accountable to these policies. To cancel or reschedule, please send us an email at info@partyone.in or reach out to us via call or
             WhatsApp number at 9043133423</li>
        </ul>
      </section>
    </div>
  );
};

export default CancellationRefundPolicy;
