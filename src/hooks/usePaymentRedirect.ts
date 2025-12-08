import { useState } from 'react';

const REGISTRATION_FORM_URL = 'https://payments.cashfree.com/forms/NEWGENGURUKULFOUNDERWORKSHOP';

// Hook for handling registration form redirects
export const usePaymentRedirect = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const redirectToPayment = () => {
    try {
      setIsRedirecting(true);
      
      // Redirect to registration form
      window.location.href = REGISTRATION_FORM_URL;
    } catch (error) {
      console.error('Failed to redirect to registration form:', error);
      setIsRedirecting(false);
    }
  };

  return { redirectToPayment, isRedirecting };
};