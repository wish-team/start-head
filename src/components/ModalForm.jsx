"use client";

import { Button, Label, Modal, TextInput, Spinner } from "flowbite-react";
import { useState } from "react";
import CopyToClipboardButton from './CopyToClipBoard';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

export default function ModalForm() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
    setName('');
    setErrors({ name: '', email: '' });
    setLoading(false);
    setStep(0);
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple email validation pattern
    return re.test(email);
  }

  function nextStep() {
    let newErrors = { name: '', email: '' };

    if (!name) {
      newErrors.name = "Name is required.";
    }

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format.";
    }

    setErrors(newErrors);

    // Only proceed if no errors
    if (!newErrors.name && !newErrors.email) {
      setLoading(true);  // Set loading state to true during the fetch

      const postData = {
        name: name,
        email: email
      };
      fetch('https://script.google.com/macros/s/AKfycbxm029RqzLXoX4oavOATQS7hVJqJjg7KQmCrFYB_Aj8wEM3M_NhCIKggKz8_x-fY6gq/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(postData)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();  // Parse the JSON response
        })
        .then(data => {
          if (data.result === 'Success') {
            setLoading(false);  // Stop the loading state
            setStep(1);         // Move to the next step
          } else {
            console.error('Error:', data);
          }
        })
        .catch(error => {
          setLoading(false);
          console.error("Error posting to Google Sheet:", error);
        });
  }
}

  return (
    <>
      <Button onClick={() => setOpenModal(true)}><i className="fa-solid fa-wand-magic-sparkles flex items-center pr-2"></i>Register Event Now!</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-10">
            {step === 0 && (
              <>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Register to the Virtual Event 'Decentralized Startups'
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Your Full Name" />
                  </div>
                  <TextInput
                    id="name"
                    placeholder="Amirhosein Shirani"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    color={errors.name ? 'failure' : ''}
                    style={{ color: '#1e1e1e'  }}
                  />
                  {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your Email" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    color={errors.email ? 'failure' : ''}
                    style={{ color: '#1e1e1e' }}
                  />
                  {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
                </div>
                <div className="w-full">
                  <Button onClick={nextStep} disabled={loading}>
                    {loading ? (
                      <Spinner size="sm" className="mr-2" />
                    ) : "Register"}
                  </Button>
                </div>
              </>
            )}
            {step === 1 && (
              <>
              <div className="mb-56">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Welcome {name} &#128512;!
                </h3>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                 💻 The link to the event:
                </h3>
                <div>
                  <div className="flex gap-4 justify-between border-solid border-2 border-primary bg-[#1e1e1e] p-4 rounded-md">
                    <h3 className="text-sm font-medium text-white dark:text-white">
                      https://meet.google.com/utc-pnxf-fxy
                    </h3>
                    <CopyToClipboardButton content={'https://meet.google.com/utc-pnxf-fxy'} />
                  </div>
                  <div className="flex justify-center items-center mt-2">
                  <AddToCalendarButton name="Decentralized Startups"
                     description="event at the link https://meet.google.com/utc-pnxf-fxy"
                     startDate="2024-10-19"
                     startTime="16:00"
                     endDate="2024-10-19"
                     endTime="20:00"
                     timeZone="UTC"
                     location="World Wide Web"
                     organizer="Wish Work|info@wishwork.org"
                     options={['Apple','Google','iCal','Outlook.com','Yahoo']}
                     buttonStyle="round"
                    ></AddToCalendarButton>
                    </div>
                </div>
                </div>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
