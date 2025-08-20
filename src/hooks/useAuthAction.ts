import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

// Hook for handling authentication-protected actions

export const useAuthAction = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const executeAuthAction = (action?: () => void) => {
    if (user) {
      // User is authenticated, execute the action
      if (action) action();
    } else {
      // User is not authenticated, redirect to auth page
      navigate('/auth');
    }
  };

  return { executeAuthAction, isAuthenticated: !!user };
};