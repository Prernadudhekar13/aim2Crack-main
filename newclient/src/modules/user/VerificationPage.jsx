import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './VerificationPage.css';

const VerificationPage = () => {
  const { token } = useParams();
  const [verificationStatus, setVerificationStatus] = useState('');
  const [countdown, setCountdown] = useState(10); // Countdown timer value
  const navigate = useNavigate(); // Access the navigate function

  useEffect(() => {
    fetch(`http://127.0.0.1:7000/verify?token=${token}`)
      .then(response => {
        if (response.status === 250) {
          // console.log(response.status);
          setVerificationStatus('Email successfully verified!');
          setTimeout(() => {
            navigate('/login'); // Navigate to sign-in page after 10 seconds
          }, 10000);
        } else if (response.status === 210) {
          navigate('/reset-password');
        } else {
          setVerificationStatus('Verification failed. Please try again.');
        }
      })
      .catch(error => {
        // console.error('Error verifying email:', error);
        setVerificationStatus('An error occurred while verifying the email.');
      });
  }, [token, navigate]);
  
  useEffect(() => {
    // Update countdown timer every second
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);
  
    // Clear the timer when countdown reaches 0
    if (countdown === 0) {
      clearInterval(timer);
      if (verificationStatus === 'Email successfully verified!') {
        navigate('/login'); // Redirect to the login page after 10 seconds only if verification is successful
      }
    }
  
    return () => {
      clearInterval(timer);
    };
  }, [countdown, verificationStatus, navigate]);
  
  return (
    
    <div className="container">
      {verificationStatus && (
        <div className="popup">
            <h1>Email Verification</h1>
          <p>{verificationStatus}</p>
          <p className="timer">Redirecting to sign-in page in {countdown} seconds...</p>
        </div>
      )}
    </div>
  );
};

export default VerificationPage;
