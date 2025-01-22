import React from 'react';
import { Heart, DollarSign, CreditCard, Ban as Bank } from 'lucide-react';

const Donate = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Support Our Cause</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your donation helps us continue our mission of healing and rebuilding communities
          </p>
          <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-flex items-center">
            <Heart className="h-6 w-6 mr-2" />
            Donate Now
          </button>
        </div>
      </div>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">$50</h3>
              <p className="text-gray-600">Provides essential supplies for a family in need</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">$100</h3>
              <p className="text-gray-600">Supports peace-building workshop for 10 participants</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">$500</h3>
              <p className="text-gray-600">Funds a community development project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Ways to Give</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <CreditCard className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Online Donation</h3>
              <p className="text-gray-600 mb-6">
                Make a secure online donation using your credit card or PayPal account.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                Donate Online
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Bank className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Bank Transfer</h3>
              <p className="text-gray-600 mb-6">
                Make a direct bank transfer to our account. Contact us for banking details.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                Get Bank Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Giving */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Become a Monthly Donor</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of monthly donors and help us create lasting change in the DRC
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors duration-200">
            Start Monthly Giving
          </button>
        </div>
      </section>
    </div>
  );
};

export default Donate;