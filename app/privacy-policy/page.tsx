import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">
          <strong>Last updated: November 28, 2024</strong>
        </p>

        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">Schedura ("Company", "We", "Us", or "Our") respects your privacy and is committed to protecting it through this Privacy Policy. This document explains how we collect, use, protect, and share your information when you use our Service, as well as your rights and how the law protects you.</p>
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
          <p className="text-gray-700 leading-relaxed mb-4">We collect the following information to provide and improve our Service:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Your Google Account:</strong> Required for authentication via Google Sign-In, managed securely through Clerk.
            </li>
            <li>
              <strong>Google Calendar:</strong> Access to manage your calendar events, with your explicit authorization.
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
              <strong>Calendar Integration:</strong> To provide features for scheduling and managing your calendar events.
            </li>
            <li>
              <strong>Communication:</strong> To send you updates or notifications related to the Service.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">We do not use cookies or tracking technologies.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Protection</h2>
          <p className="text-gray-700 leading-relaxed">We take the protection of your data seriously and implement the following measures to ensure its security:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>All data in transit is encrypted using HTTPS and TLS protocols.</li>
            <li>Sensitive data, including authentication tokens, is encrypted at rest using industry-standard encryption algorithms.</li>
            <li>Access to user data is restricted to authorized personnel only, with strict access controls and regular audits in place.</li>
            <li>Regular security assessments and penetration testing are conducted to identify and address vulnerabilities.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Retention and Deletion</h2>
          <p className="text-gray-700 leading-relaxed">We retain your data only as long as necessary to provide the Service and fulfill the purposes outlined in this Privacy Policy. Specifically:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>Google user data is retained as long as you actively use the Service.</li>
            <li>Upon account deletion or inactivity for more than 12 months, all associated user data will be permanently deleted from our systems.</li>
            <li>
              You may request the deletion of your data at any time by contacting us at{" "}
              <a href="mailto:aviralsharma723@gmail.com" className="text-blue-600 underline">
                aviralsharma723@gmail.com
              </a>
              .
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">Deleted data is irretrievable and cannot be restored. Backup copies are purged within 30 days of deletion.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Rights</h2>
          <p className="text-gray-700 leading-relaxed">Depending on your location, you may have the following rights regarding your personal data:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>
              <strong>Right to Access:</strong> You can request access to the personal data we hold about you.
            </li>
            <li>
              <strong>Right to Correction:</strong> You can request that we correct any inaccurate or incomplete personal data.
            </li>
            <li>
              <strong>Right to Deletion:</strong> You can request the deletion of your personal data under certain circumstances.
            </li>
            <li>
              <strong>Right to Restrict Processing:</strong> You can request the restriction of processing your personal data under certain conditions.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> You can request the transfer of your personal data to another service provider.
            </li>
            <li>
              <strong>Right to Object:</strong> You can object to the processing of your personal data under certain conditions.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:aviralsharma723@gmail.com" className="text-blue-600 underline">
              aviralsharma723@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Legal Basis for Processing</h2>
          <p className="text-gray-700 leading-relaxed">We process your personal data based on the following legal grounds:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>
              <strong>Consent:</strong> You have given clear consent for us to process your personal data for specific purposes.
            </li>
            <li>
              <strong>Performance of a Contract:</strong> The processing is necessary for the performance of a contract to which you are a party.
            </li>
            <li>
              <strong>Legitimate Interests:</strong> The processing is necessary for our legitimate interests, provided that your interests and fundamental rights do not override those interests.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">International Data Transfers</h2>
          <p className="text-gray-700 leading-relaxed">Your information, including Personal Data, may be transferred to and maintained on servers located outside your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.</p>
          <p className="text-gray-700 leading-relaxed mt-4">We take all necessary steps to ensure that your data is treated securely and in accordance with this Privacy Policy and applicable data protection laws.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          <p className="text-gray-700 leading-relaxed mt-4">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sharing Your Data</h2>
          <p className="text-gray-700 leading-relaxed mb-4">We may share your data only in the following scenarios:</p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              <strong>With Service Providers:</strong> Clerk securely processes your Google Sign-In data, adhering to industry-standard practices.
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
