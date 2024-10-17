// src/components/FramerStaggerButton.jsx

import React, { useEffect } from 'react';
import StaggerHoverButton from "https://framer.com/m/Stagger-Hover-Button-tbX6.js@WYiS7aYB3Exdmi287kkO"
const FramerStaggerButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://framerusercontent.com/modules/bcRbAoPl9WNPi58vC1WT/KUaNVAklTmDTX3oOoiS9/ZHZXXRwQx.js';
    script.async = true;
    document.body.appendChild(script);

    // Handle the script's loading state
    script.onload = () => {
      console.log("Framer script loaded");
    };

    return () => {
      document.body.removeChild(script); // Clean up the script on unmount
    };
  }, []);

  return <StaggerHoverButton/>; // The div for the Framer component
};

export default FramerStaggerButton;
