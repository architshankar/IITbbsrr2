// const PrivacyPolicy = () => {
//   return (
//     <section className="min-h-screen bg-navy-dark text-gray-300 px-6 py-20">
//       <div className="container mx-auto max-w-4xl">
//         <h1 className="text-4xl font-bold gradient-text mb-6">Privacy Policy</h1>
//         <p className="text-lg leading-relaxed">
//           This is where your privacy policy content will go. You can outline what user data is collected, how it's used,
//           and how it's protected.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default PrivacyPolicy;
const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-navy-dark text-gray-300 px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold gradient-text mb-8">Privacy Policy</h1>

        <p className="text-lg leading-relaxed mb-6">
          At Inlighn Tech, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you interact with us through our website, application, webinars, or any of our services.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Personal Identification Information (Name, Email Address, Phone Number, etc.)</li>
          <li>Educational and professional details provided by you</li>
          <li>Communication content (e.g., messages, emails, feedback)</li>
          <li>Usage data (e.g., IP address, browser type, access time)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Manage and provide our internship and training services</li>
          <li>Communicate with you (including support, updates, or announcements)</li>
          <li>Improve our services and platform</li>
          <li>Ensure compliance with legal obligations</li>
          <li>Promote our events and opportunities with your consent</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mb-2">3. Sharing Your Information</h2>
        <p className="mb-6">
          We do not sell or trade your personal information. We may share data with:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Trusted service providers who assist in operating our services</li>
          <li>Legal authorities when required by law</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mb-2">4. Data Security</h2>
        <p className="mb-6">
          We implement appropriate technical and organizational security measures to protect your data. However, no electronic transmission or storage is 100% secure, and we cannot guarantee absolute data security.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-2">5. Your Rights</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Access, update, or delete your personal data</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Object to certain uses of your data</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mb-2">6. Cookies and Tracking</h2>
        <p className="mb-6">
          We may use cookies to enhance user experience. You can modify your browser settings to disable cookies, but it may affect certain functionalities.
        </p>

        <h2 className="text-2xl font-semibold text-white mb-2">7. Changes to This Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time. We encourage you to review it periodically for any changes.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
