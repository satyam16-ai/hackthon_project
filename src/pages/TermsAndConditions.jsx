import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate(-1); // Navigate back to the previous page or wherever you want after acceptance
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
        
        <div className="text-gray-700 space-y-4 overflow-y-auto h-96">
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to [Your Platform Name]. By using our services, you agree to abide by the following terms and conditions. 
            These terms apply to all users, including donors and NGOs registered on the platform.
          </p>
          
          <h2 className="text-xl font-semibold">2. User Eligibility</h2>
          <p>
            To register and use our platform, you must be at least 18 years old. By signing up, you confirm that all the 
            information provided is accurate and complete.
          </p>
          
          <h2 className="text-xl font-semibold">3. Donor Registration</h2>
          <p>
            By registering as a donor, you agree to provide accurate personal and payment information. You may choose to 
            donate funds or items to NGOs through our platform, subject to our terms and conditions.
          </p>
          
          <h2 className="text-xl font-semibold">4. NGO Registration</h2>
          <p>
            NGOs must provide valid documentation to verify their legitimacy. All information provided must be truthful and 
            updated regularly.
          </p>

          <h2 className="text-xl font-semibold">5. Holding Donor Funds</h2>
          <p>
            All donations made on the platform will first be deposited into our platform’s account before being released to the respective NGOs.
          </p>
          <p>
            <strong>Right to Hold Funds:</strong> We reserve the right to hold donor funds until we verify that the NGO has provided sufficient proof of how the funds will be utilized.
          </p>
          <p>
            <strong>Purpose of Holding Funds:</strong> Holding funds ensures that donations are used for the intended cause, providing transparency and trust for both donors and NGOs.
          </p>
          <p>
            <strong>Fund Release Process:</strong> Once the NGO submits appropriate work proof (such as activity reports, progress updates, etc.), we will review and release the funds to the NGO.
          </p>

          <h2 className="text-xl font-semibold">6. Payment Terms</h2>
          <p>
            Donations can be made using approved payment methods listed on the platform. We do not store your payment information directly; it is handled securely through our third-party payment provider.
          </p>
          <p>
            <strong>Transaction Fees:</strong> Certain transaction fees may apply, which will be communicated to donors during the donation process.
          </p>

          <h2 className="text-xl font-semibold">7. Refunds</h2>
          <p>
            Once donations have been processed and sent to the NGO, refunds cannot be issued. In case of technical errors during payment, please contact our support team.
          </p>

          <h2 className="text-xl font-semibold">8. Platform's Liability</h2>
          <p>
            We are not liable for any misuse of funds by NGOs after they have been released. We do, however, conduct due diligence to ensure NGOs meet our requirements.
          </p>

          <h2 className="text-xl font-semibold">9. Privacy</h2>
          <p>
            We value your privacy. All personal information will be stored securely and will not be shared without your consent, except as required by law.
          </p>

          <h2 className="text-xl font-semibold">10. Termination of Accounts</h2>
          <p>
            We reserve the right to suspend or terminate user accounts if there is a breach of these terms or misuse of the platform.
          </p>

          <h2 className="text-xl font-semibold">11. Amendments</h2>
          <p>
            We may update these terms and conditions from time to time. All updates will be posted on our platform, and it is the user’s responsibility to review them regularly.
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={handleAccept}
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
          >
            I Agree to the Terms and Conditions
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
