import React from 'react';
import { Shield, Eye, Lock, FileText, Users, AlertCircle } from 'lucide-react';

const Policy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Privacy Policy</h1>
        <p className="text-lg text-gray-600">
          Our commitment to protecting your privacy and outlining our terms of service
        </p>
      </div>

      {/* Privacy Policy Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 rounded-lg p-3 mr-4">
            <Shield className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Eye className="h-5 w-5 text-blue-600 mr-2" />
              Information We Collect
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Personal information (name, email, phone number, address)</li>
              <li>• Payment information for processing orders</li>
              <li>• Browsing behavior and preferences on our website</li>
              <li>• Device information and IP address for security purposes</li>
              <li>• Customer service communications and feedback</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Lock className="h-5 w-5 text-blue-600 mr-2" />
              How We Use Your Information
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Process and fulfill your orders efficiently</li>
              <li>• Communicate about your orders and provide customer support</li>
              <li>• Improve our products and services based on your feedback</li>
              <li>• Send promotional offers and updates (with your consent)</li>
              <li>• Protect against fraud and ensure website security</li>
              <li>• Comply with legal obligations and resolve disputes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Users className="h-5 w-5 text-blue-600 mr-2" />
              Information Sharing
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• We never sell your personal information to third parties</li>
              <li>• Trusted service providers help us operate our business</li>
              <li>• Payment processors handle transactions securely</li>
              <li>• Shipping partners for order delivery</li>
              <li>• Legal authorities when required by law</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• SSL encryption protects your data in transit</li>
              <li>• Secure servers store your information safely</li>
              <li>• Regular security audits and updates</li>
              <li>• Limited access to personal information</li>
              <li>• Prompt notification of any security breaches</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Terms of Service Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 rounded-lg p-3 mr-4">
            <FileText className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Information</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• All products are authentic and sourced from authorized distributors</li>
              <li>• Product images are for reference; actual items may vary slightly</li>
              <li>• Prices are subject to change without prior notice</li>
              <li>• Product availability is not guaranteed until order confirmation</li>
              <li>• Specifications and features are provided by manufacturers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Orders & Payment</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• All orders are subject to acceptance and availability</li>
              <li>• Payment must be completed before order processing</li>
              <li>• We accept major credit cards, debit cards, and Cash on Delivery</li>
              <li>• Order cancellation is allowed before shipping confirmation</li>
              <li>• Refunds will be processed within 7-10 business days</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Shipping & Delivery</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Free shipping available on orders over ₹999</li>
              <li>• Standard delivery takes 3-7 business days</li>
              <li>• Express shipping options available for faster delivery</li>
              <li>• Delivery attempts will be made during business hours</li>
              <li>• Customer is responsible for providing accurate address</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Returns & Exchanges</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 30-day return policy for unused items in original packaging</li>
              <li>• Items must be in resaleable condition for returns</li>
              <li>• Return shipping costs may apply (except for defective items)</li>
              <li>• Exchanges are subject to availability of requested items</li>
              <li>• Refunds will be credited to the original payment method</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">User Responsibilities</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Provide accurate and complete information during registration</li>
              <li>• Maintain confidentiality of your account credentials</li>
              <li>• Use the website only for lawful purposes</li>
              <li>• Respect intellectual property rights</li>
              <li>• Report any suspicious activity or security concerns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
            <p className="text-yellow-700 mb-4">
              This is a college project created for educational purposes. While we strive to provide a realistic
              e-commerce experience, this is not a real store and no actual transactions will be processed.
            </p>
            <div className="text-sm text-yellow-600">
              <p className="mb-2"><strong>Last Updated:</strong> January 2024</p>
              <p><strong>Contact:</strong> For questions about these policies, contact us at support@gearup.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;