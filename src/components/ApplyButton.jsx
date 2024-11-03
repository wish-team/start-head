"use client";

import { Button } from "flowbite-react";
import { useState, useEffect } from "react";
import { useLottie } from "lottie-react";
import AnimationData from './wired-outline-2239-star-of-bethlehem-hover-pinch.json';

export default function ApplyButton() {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const options = {
    animationData: AnimationData,
    loop: true
  };
  
  const { View } = useLottie(options);

  useEffect(() => {
    const targetDate = new Date("2024-12-02T00:00:00Z"); // Set target date in UTC
    const checkDate = () => {
      const currentDate = new Date();
      if (currentDate >= targetDate) {
        setIsButtonEnabled(true);
      }
    };
    checkDate(); // Initial check
    const timer = setInterval(checkDate, 1000 * 60); // Re-check every minute

    return () => clearInterval(timer); // Clean up timer on component unmount
  }, []);

  return (
    <>
      <Button className="relative" disabled={!isButtonEnabled}>
        <div className="flex items-center">
          <div style={{ width: '2em', height: '2em', marginRight: '4px', overflow: 'hidden' }}>
            {View}
          </div>
          <a href="https://dc93l3rxgcp.typeform.com/to/Pl0jkBfx" target="_blank" rel="noopener noreferrer">
            Apply Now!
          </a>
        </div>
      </Button>
    </>
  );
}
