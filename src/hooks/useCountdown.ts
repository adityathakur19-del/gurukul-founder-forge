import { useState, useEffect } from 'react';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const useCountdown = (targetDate: string, includeSeconds: boolean = false) => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate);
      const now = new Date();
      
      // Convert current time to IST
      const currentIST = new Date(now.toLocaleString("en-US", {
        timeZone: "Asia/Kolkata"
      }));
      
      const difference = target.getTime() - currentIST.getTime();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = includeSeconds ? Math.floor((difference / 1000) % 60) : 0;
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    
    // Only set interval if we need seconds, otherwise update every minute
    const interval = setInterval(calculateTimeLeft, includeSeconds ? 1000 : 60000);
    
    return () => clearInterval(interval);
  }, [targetDate, includeSeconds]);

  return timeLeft;
};