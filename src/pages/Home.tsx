import HeroSlider from '../components/HeroSlider';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Our Vision</h2>
              <p className="text-gray-700 text-lg text-center">
                To see Healed, Reconciled and Prosperous Communities Living Peace in DRC and other regions of Africa affected through violence
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Our Mission</h2>
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
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Overview of results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3,950+</div>
              <p className="text-gray-600">Peope Empowered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,112,97+</div>
              <p className="text-gray-600">People Impacted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4+</div>
              <p className="text-gray-600">Areas Reached</p>
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
};

export default Home;