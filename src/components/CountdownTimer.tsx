import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target date: August 23, 2025, 13:00 WITA
    const targetDate = new Date('2025-08-23T13:00:00+08:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 mt-8">
      <div className="countdown-box">
        <div className="text-3xl font-bold glow-text">{timeLeft.days.toString().padStart(2, '0')}</div>
        <div className="text-sm text-muted-foreground uppercase tracking-wide">Days</div>
      </div>
      <div className="countdown-box">
        <div className="text-3xl font-bold glow-text">{timeLeft.hours.toString().padStart(2, '0')}</div>
        <div className="text-sm text-muted-foreground uppercase tracking-wide">Hours</div>
      </div>
      <div className="countdown-box">
        <div className="text-3xl font-bold glow-text">{timeLeft.minutes.toString().padStart(2, '0')}</div>
        <div className="text-sm text-muted-foreground uppercase tracking-wide">Minutes</div>
      </div>
      <div className="countdown-box">
        <div className="text-3xl font-bold glow-text">{timeLeft.seconds.toString().padStart(2, '0')}</div>
        <div className="text-sm text-muted-foreground uppercase tracking-wide">Seconds</div>
      </div>
    </div>
  );
};