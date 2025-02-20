
import { MapPin, Users } from 'lucide-react';

const WhereWeWork = () => {
  const locations = [
    {
      name: "Goma",
      description: "Our headquarters and main operational center",
      coordinates: { x: 78, y: 32 }
    },
    {
      name: "Rutshuru",
      description: "Community development and peace-building programs",
      coordinates: { x: 76, y: 28 }
    },
    {
      name: "Masisi",
      description: "Psychosocial support and advocacy initiatives",
      coordinates: { x: 74, y: 30 }
    },
    {
      name: "Walikale",
      description: "Environmental protection and community health projects",
      coordinates: { x: 70, y: 32 }
    },
    {
      name: "Beni",
      description: "Relief operations and community empowerment",
      coordinates: { x: 72, y: 20 }
    }
  ];

  const targetGroups = [
    "Influential community leaders",
    "Youth (University students)",
    "Women (victims of violence)",
    "IDPs and Refugees",
    "Children born out of rape/orphans",
    "Ex-Combatants"
  ];

  return (
    <div className="min-h-screen">
      <div className="relative h-[50vh] flex items-center">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Touching Hearts Transforming Nations</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Making a difference across Northern Kivu Province, DRC
          </p>
        </div>
      </div>
      <section className="py-20 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <div className="relative w-full mx-auto">
               <img src="/drc.png" alt="drc map"/>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {locations.map((location, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold">{location.name}</h3>
                </div>
                <p className="text-gray-600">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Groups Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetGroups.map((group, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <p className="text-lg text-gray-800">{group}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhereWeWork;