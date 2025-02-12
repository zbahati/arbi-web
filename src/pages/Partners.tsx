import { Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import rabagirana from '/logo.png';
import wayofpeace from '/wayofpeace.webp';
import prisonfellowship from '/prisonfellowship.png';
import cpa from '/cpa.jpeg';
import iicbs from '/LogoDiapositive.svg';
import micah from '/micah.jpg';
import rucher from '/rucher.png';

const Partners = () => {
  const partners = [
    {
      name: "Rabagirana Ministries",
      category: "Regional Partner",
      description: "Regional collaboration for community transformation",
      logo: rabagirana
    },
    {
      name: "Way of Peace",
      category: "Regional Partner",
      description: "Peace-building and reconciliation initiatives",
      logo: wayofpeace
    },
    {
      name: "Prison Fellowship International",
      category: "Regional Partner",
      description: "Rehabilitation and reintegration programs",
      logo: prisonfellowship
    },
    {
      name: "Community Poverty Action (CPA)",
      category: "Local Partner",
      description: "Local community development initiatives",
      logo: cpa
    },
    {
      name: "International Institute for Community-Based-Socialtherapy",
      category: "Regional Partner",
      description: "inner healing starts with social healing",
      logo: iicbs
    },
    {
      name: "Le Rucher Ministries",
      category: "Regional Partner",
      description: "Equipping people to impact a needy world",
      logo: rucher
    },
    {
      name: "Micah",
      category: "Regional partner",
      description: "A world-wide community of Christians active in relief, development, creation care and advocacy",
      logo: micah
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[20vh] flex items-center">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("11.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transforming Lives in DRC</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Alone, we go faster. Together, we go further
          </p>
        </div>
      </div>

      {/* Partners Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${partner.logo})` }}
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Link2 className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
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