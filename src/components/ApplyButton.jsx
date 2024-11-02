"use client";

import { Button, Label, Modal, TextInput, Spinner } from "flowbite-react";
import { useState, useEffect } from "react";
import CopyToClipboardButton from './CopyToClipBoard';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { useLottie } from "lottie-react";
import AnimationData from './wired-outline-2239-star-of-bethlehem-hover-pinch.json'
// import Player from 'react-lottie-player'; // Import the Lottie player
// import lottie from "lottie-web";
// import { defineElement } from "@lordicon/element";

export default function ApplyButton() {
  const options = {
    animationData: AnimationData,
    loop: true
  };
  
  const { View } = useLottie(options);

  return (
    <>
      <Button className="relative">
        <div className="flex items-center">
          {/* Replace Icon with Lottie Animation */}
          <div style={{ width: '2em', height: '2em', marginRight:'4px', overflow: 'hidden' }}>
          {View}
          </div>
          <a href="https://dc93l3rxgcp.typeform.com/to/Pl0jkBfx" target="_blank">Apply Now!</a>
        </div>
      </Button>
    </>
  );
}
