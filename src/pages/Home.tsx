import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/5.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Touching Hearts Transforming Nations
          </h1>
          <p className="text-2xl md:text-3xl mb-4">
            Impacting Hearts-Heads-Hands
          </p>
          <div className="max-w-3xl mx-auto mt-8 mb-12">
            <blockquote className="text-lg italic">
              "Your people will rebuild the ancient ruins and will raise up the age-old foundations;
              you will be called Repairer of Broken Walls, Restorer of Streets with Dwellings."
              <footer className="mt-2 font-semibold">Isaiah 58:6-12</footer>
            </blockquote>
          </div>
          <Link
            to="/programs"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Our Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Vision</h2>
              <p className="text-gray-700 text-lg text-center">
                To see Healed, Reconciled and Prosperous Communities Living Peace in DRC and other regions of Africa affected through violence
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Mission</h2>
              <p className="text-gray-700 text-lg text-center">
                To rebuild bridges within and between affected communities through integral community based approaches fostering inclusive cooperation, capacity building for sustainable healing, peace building, and development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12"> Overview of results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2011</div>
              <p className="text-gray-600">Year Founded</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
              <p className="text-gray-600">Regions Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2000000+</div>
              <p className="text-gray-600">People impacted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2500000+</div>
              <p className="text-gray-600">People impowered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
              <p className="text-gray-600">Partner Organizations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;