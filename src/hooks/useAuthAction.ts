import { useNavigate } from 'react-router-dom';

// Hook for handling authentication-protected actions
export const useAuthAction = () => {
  const navigate = useNavigate();

  const executeAuthAction = (action?: () => void) => {
    // For public pages, always redirect to auth since user is not authenticated
    navigate('/auth');
  };

  return { executeAuthAction, isAuthenticated: false };
};