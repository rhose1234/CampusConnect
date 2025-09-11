import React, { useEffect, useState } from "react";

const Countdown = ({ date }) => {
  const calculateTimeLeft = () => {
    const eventDate = new Date(date).getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
      return { d: 0, h: 0, m: 0, s: 0 }; // Event passed
    }

    return {
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff / (1000 * 60 * 60)) % 24),
      m: Math.floor((diff / (1000 * 60)) % 60),
      s: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, [date]);

  return (
    <span className="countdown">
      {timeLeft.d}d : {timeLeft.h}h : {timeLeft.m}m : {timeLeft.s}s
    </span>
  );
};

export default Countdown;
