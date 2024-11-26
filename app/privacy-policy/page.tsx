import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">
          <strong>Last updated: November 26, 2024</strong>
        </p>

        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">Schedura ("Company", "We", "Us", or "Our") respects your privacy and is committed to protecting it through this Privacy Policy. This document explains how we collect, use, and share your information when you use our Service, as well as your rights and how the law protects you.</p>
          <p className="text-gray-700 leading-relaxed mt-4">By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interpretation and Definitions</h2>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Definitions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Account:</strong> Refers to the Google account you use to access the Service.
            </li>
            <li>
              <strong>Company:</strong> (referred to as "We", "Us", or "Our") refers to Schedura.
            </li>
            <li>
              <strong>Device:</strong> Any device capable of accessing the Service, such as a computer, phone, or tablet.
            </li>
            <li>
              <strong>Personal Data:</strong> Any information that identifies an individual.
            </li>
            <li>
              <strong>Service:</strong> Refers to the Schedura platform accessible at{" "}
              <a href="https://schedura.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                https://schedura.vercel.app
              </a>
              .
            </li>
            <li>
              <strong>You:</strong> Means the individual accessing or using the Service.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Personal Data</h3>
          <p className="text-gray-700 leading-relaxed mb-4">To use our Service, we request access to:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Your Google Account:</strong> Required for authentication using Google Sign-In, managed via Clerk, a third-party service that securely handles authentication.
            </li>
            <li>
              <strong>Google Calendar:</strong> Permission to access your Google Calendar for scheduling purposes, including viewing and managing calendar events with your explicit authorization.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Data</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Authentication:</strong> To securely log you into the platform using Google Sign-In.
            </li>
            <li>
              <strong>Calendar Integration:</strong> To provide calendar management features, such as scheduling, retrieving, and updating your calendar events.
            </li>
            <li>
              <strong>Communication:</strong> To send you important updates or notifications related to the Service.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">We do not use cookies or tracking technologies.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sharing Your Data</h2>
          <p className="text-gray-700 leading-relaxed mb-4">We may share your data only in the following scenarios:</p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <strong>With Service Providers:</strong> Clerk processes your Google Sign-In data securely, adhering to industry-standard data protection practices.
            </li>
            <li>
              <strong>With Your Consent:</strong> Data will only be shared with third parties when you explicitly agree.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed mt-4">We do not sell or rent your data to any third party.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">If you have questions or concerns about this Privacy Policy, please contact us at:</p>
          <ul className="list-none text-gray-700 mt-4">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:aviralsharma723@gmail.com" className="text-blue-600 underline">
                aviralsharma723@gmail.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
