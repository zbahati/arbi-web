import { Link } from 'react-router-dom';
import cpa from '/cpa.jpeg';
import iicbs from '/LogoDiapositive.svg';
import micah from '/micah.jpg';
import rucher from '/rucher.png';
import pdd from '/pdd.jpeg';

const Partners = () => {
  const partners = [
    {
      logo: cpa
    },
    {
      logo: iicbs
    },
    {
      logo: rucher
    },
    {
      logo: micah
    },
    {
      logo: pdd
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("11.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Touching Hearts Transforming Nations</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Alone, we go faster. Together, we go further
          </p>
        </div>
      </div>

      {/* Partners Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 justify-center items-center md:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-400 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div 
                  className="h-36 bg-contain bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${partner.logo})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Interested in Partnership?</h2>
          <p className="text-xl mb-8">Join us in our mission to transform communities in the DRC</p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Partners;