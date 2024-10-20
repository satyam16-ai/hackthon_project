import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-6">
          This Privacy Policy outlines how we collect, use, and protect your information when you use our platform.
          Your privacy is very important to us, and we are committed to safeguarding your personal data.
        </p>

        {/* Section 1: Information We Collect */}
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-6">
          <li>Personal identification details (such as name, email, and phone number)</li>
          <li>Donation history and transaction details</li>
          <li>Volunteering preferences and NGO registration information</li>
          <li>Technical data such as IP addresses, browser type, and operating system</li>
        </ul>

        {/* Section 2: How We Use Your Information */}
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-700 mb-6">
          We use your personal data to provide, improve, and maintain our platform. This includes:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-6">
          <li>Processing donations and maintaining a record of your contributions</li>
          <li>Verifying NGO registration and ensuring transparency</li>
          <li>Sending updates, newsletters, or important notifications about our platform</li>
          <li>Analyzing user behavior to improve the overall user experience</li>
        </ul>

        {/* Section 3: Data Security */}
        <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
        <p className="text-gray-700 mb-6">
          We implement a variety of security measures to ensure the safety of your personal information. All transactions are processed through a secure payment gateway and are not stored or processed on our servers.
        </p>

        {/* Section 4: Cookies */}
        <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
        <p className="text-gray-700 mb-6">
          Our platform may use cookies to enhance your experience. Cookies are small files that your browser stores on your device. You can choose to disable cookies through your browser settings, but doing so may affect certain functionalities of our platform.
        </p>

        {/* Section 5: Third-Party Services */}
        <h2 className="text-2xl font-semibold mb-4">5. Third-Party Services</h2>
        <p className="text-gray-700 mb-6">
          We may use third-party services to manage payments, email communications, and user data. These third-party providers have their own privacy policies, which we encourage you to review. We are not responsible for the privacy practices of these external sites or services.
        </p>

        {/* Section 6: Changes to the Privacy Policy */}
        <h2 className="text-2xl font-semibold mb-4">6. Changes to the Privacy Policy</h2>
        <p className="text-gray-700 mb-6">
          We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and the date of the latest update will be indicated at the bottom of the policy.
        </p>

        {/* Section 7: Contact Us */}
        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p className="text-gray-700 mb-6">
          If you have any questions or concerns about our Privacy Policy, please contact us at:
        </p>
        <p className="text-gray-700 font-medium">
          Email: support@yourplatform.com <br />
          Phone: +91-7054167098
        </p>

        <div className="mt-8 text-gray-500 text-sm">
          <p>Last updated: 19/10/2024</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
