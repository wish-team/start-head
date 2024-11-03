"use client"
import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-02T00:00:00Z");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center my-6 p-4 bg-[#1E1E1E] rounded-lg shadow-md border border-[#FFD800]">
      <h2 className="text-xl md:text-3xl font-bold text-[#FFD800] animate-pulse mb-3">
        Countdown to Application Opening
      </h2>
      <div className="flex justify-around gap-4 mt-2 text-white text-sm md:text-base">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold">{value}</span>
            <span className="uppercase text-[#FFD800] tracking-wide">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
