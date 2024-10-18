import emailjs from 'emailjs-com';

// Initialize Email.js with the user ID from environment variables
const initEmailJS = () => {
  emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);  // User ID
};

// Send Email Function
const sendEmail = (templateParams, templateId) => {
  return emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,  // Service ID from environment variables
      templateId,                               // Template ID
      templateParams
    )
    .then((response) => {
      console.log('Email successfully sent!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
};

export { initEmailJS, sendEmail };
