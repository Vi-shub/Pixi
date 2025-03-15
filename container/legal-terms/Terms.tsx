import { useState } from "react";

export default function Terms(){
  return (
    <section className="w-full min-h-screen bg-gray-100 text-gray-900 mb-10">
      <div className="w-full max-w-7xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800 hover:text-indigo-600 transition-all duration-300">Terms of Services</h1>

        {/* Privacy Policy */}
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600 hover:text-indigo-800 transition-all duration-300">Privacy Policy</h2>
        <p className="mb-6 text-lg text-gray-700 hover:text-gray-900 transition-all duration-300">
          At <span className="font-bold text-indigo-700">Pixavia Studios</span>, we respect your privacy and are committed to protecting your personal data.
        </p>

        <h3 className="text-2xl font-medium mt-6 text-gray-800 hover:text-indigo-700 transition-all duration-300">1. Introduction</h3>
        <p className="mb-4 text-gray-700 hover:text-gray-900 transition-all duration-300">
          Pixavia Studios (<span className="font-semibold">&quot;we&quot; &quot;us&quot;, or &quot;our&quot;</span>) operates the website
          <a href="https://pixavia.in" className="text-blue-500 font-bold hover:underline ml-1 hover:text-blue-700 transition-all duration-300">pixavia.in</a> and provides visual content creation services.
        </p>

        <h3 className="text-2xl font-medium mt-6 text-gray-800 hover:text-indigo-700 transition-all duration-300">2. Collection of Personal Data</h3>
        <ul className="list-disc pl-8 space-y-4 text-gray-700">
          <li className="hover:text-gray-900 transition-all duration-300"><strong>Contact Information:</strong> Name, email, phone number, and physical address.</li>
          <li className="hover:text-gray-900 transition-all duration-300"><strong>Project Details:</strong> Description, timeline, and budget.</li>
          <li className="hover:text-gray-900 transition-all duration-300"><strong>Payment Information:</strong> Payment details, including advance payments.</li>
          <li className="hover:text-gray-900 transition-all duration-300"><strong>Required Assets:</strong> Logos, brand guidelines, and reference materials.</li>
        </ul>

        <h3 className="text-2xl font-medium mt-6 text-gray-800 hover:text-indigo-700 transition-all duration-300">3. Use of Personal Data</h3>
        <ul className="list-disc pl-8 space-y-4 text-gray-700">
          <li className="hover:text-gray-900 transition-all duration-300"><strong>Project Management:</strong> To manage and deliver your project.</li>
          <li className="hover:text-gray-900 transition-all duration-300"><strong>Communication:</strong> To respond to inquiries and provide updates.</li>
          <li className="hover:text-gray-900 transition-all duration-300"><strong>Payment Processing:</strong> To process payments, including advance and final payments.</li>
          <li className="hover:text-gray-900 transition-all duration-300"><strong>Compliance:</strong> To ensure legal and copyright standards.</li>
        </ul>

        <h3 className="text-2xl font-medium mt-6 text-gray-800 hover:text-indigo-700 transition-all duration-300">4. Data Protection and Security</h3>
        <p className="mb-6 text-gray-700 hover:text-gray-900 transition-all duration-300">We implement security measures to protect your personal data from unauthorized access or disclosure.</p>

        {/* Service Policy */}
        <h2 className="text-3xl font-semibold mt-8 text-indigo-600 hover:text-indigo-800 transition-all duration-300">Service Policy</h2>

        <h3 className="text-2xl font-medium mt-6 text-gray-800 hover:text-indigo-700 transition-all duration-300">1. Project Agreement</h3>
        <ul className="list-disc pl-8 space-y-4 text-gray-700">
          <li className="hover:text-gray-900 transition-all duration-300"><strong>Advance Payment:</strong> 20% non-refundable payment due upon signing.</li>
          <li className="hover:text-gray-900 transition-all duration-300"><strong>Time Duration:</strong> Timeline agreed before commencement.</li>
          <li className="hover:text-gray-900 transition-all duration-300"><strong>Payment Terms:</strong> Remaining balance due upon project completion.</li>
          <li className="hover:text-gray-900 transition-all duration-300"><strong>Revisions:</strong> Major changes beyond the original brief are considered new work.</li>
        </ul>

        <h3 className="text-2xl font-medium mt-6 text-gray-800 hover:text-indigo-700 transition-all duration-300">2. Cancellation Policy</h3>
        <ul className="list-disc pl-8 space-y-4 text-gray-700">
          <li className="hover:text-gray-900 transition-all duration-300"><strong>Advance Payment:</strong> The non-refundable 20% advance.</li>
          <li className="hover:text-gray-900 transition-all duration-300"><strong>Work Completed:</strong> Payment required for completed work.</li>
        </ul>

        <h3 className="text-2xl font-medium mt-6 text-gray-800 hover:text-indigo-700 transition-all duration-300">3. File Delivery</h3>
        <p className="mb-6 text-gray-700 hover:text-gray-900 transition-all duration-300">Final files will be delivered in agreed formats. Source files require an additional fee unless stated in the contract.</p>

        <h3 className="text-2xl font-medium mt-6 text-gray-800 hover:text-indigo-700 transition-all duration-300">4. Client Responsibilities</h3>
        <ul className="list-disc pl-8 space-y-4 text-gray-700">
          <li className="hover:text-gray-900 transition-all duration-300">Provide necessary assets and timely feedback.</li>
          <li className="hover:text-gray-900 transition-all duration-300">Delays caused by the client may lead to rescheduling and extra charges.</li>
        </ul>

        <h3 className="text-2xl font-medium mt-6 text-gray-800 hover:text-indigo-700 transition-all duration-300">5. Limitation of Liability</h3>
        <ul className="list-disc pl-8 space-y-4 text-gray-700">
          <li className="hover:text-gray-900 transition-all duration-300">Pixavia is not liable for any damages after delivery.</li>
          <li className="hover:text-gray-900 transition-all duration-300">Clients must ensure they have rights to materials provided.</li>
        </ul>

        <p className="mt-8 text-center font-medium text-gray-700 hover:text-gray-900 transition-all duration-300">
          By engaging <span className="font-bold text-indigo-700">Pixavia Studio</span>, you agree to our <span className="text-indigo-600 font-semibold">Terms of Service</span> and <span className="text-indigo-600 font-semibold">Privacy Policy</span>.
        </p>
      </div>
    </section>
  );
};


