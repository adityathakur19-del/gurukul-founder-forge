import { useState } from 'react';

const PAYMENT_GATEWAY_URL = 'https://payments.cashfree.com/forms/NEWGENGURUKULFOUNDERWORKSHOP';

// Hook for handling secure payment gateway redirects
export const usePaymentRedirect = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const redirectToPayment = () => {
    try {
      setIsRedirecting(true);
      
      // Use window.location.href for secure redirect to payment gateway
      window.location.href = PAYMENT_GATEWAY_URL;
    } catch (error) {
      console.error('Failed to redirect to payment gateway:', error);
      setIsRedirecting(false);
    }
  };

  return { redirectToPayment, isRedirecting };
};