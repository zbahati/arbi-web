import React from 'react';
import { Heart, Users, Scale, Infinity as Unity, Eye, Shield, Globe, BookOpen } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Dedication with excellence",
      description: "Committed to delivering the highest quality in all our initiatives and programs."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Humanity and compassion",
      description: "Treating everyone with dignity, understanding, and empathy."
    },
    {
      icon: <Scale className="h-8 w-8 text-blue-600" />,
      title: "Equality",
      description: "Ensuring fair treatment and opportunities for all community members."
    },
    {
      icon: <Unity className="h-8 w-8 text-blue-600" />,
      title: "Unity in diversity",
      description: "Celebrating our differences while working together for common goals."
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Transparency",
      description: "Maintaining open and honest communication in all our operations."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Stewardship",
      description: "Responsibly managing resources for maximum community impact."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section remains unchanged */}
      <div className="relative h-[60vh] flex items-center">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/14.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transforming Lives in DRC</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Since 2011, ARBI has been dedicated to healing communities, building peace, and fostering development in the Democratic Republic of Congo
          </p>
        </div>
      </div>

      {/* Background Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-6">Background</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  ARBI is a Christian Non-Government Organization shaped by people motivated and passionate for healing, peace building and development for affected communities in Northern Kivu province of DRC and the Regions of Africa.
                </p>
                <p className="mb-4">
                  Founded in 2011 in response to successive violent ethnic-based wars in Eastern DRC, we are guided by a vision of a Holistic Community Living Peace. Our aim is to empower community members to become active citizens in shaping their destiny.
                </p>
                <p>
                  Since 2012, ARBI has been one of the leading NGOs dedicated to integral conflict transformation and community-based development in North Kivu-DRC.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Globe className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                <p className="text-gray-600">Reaching communities across North Kivu and beyond</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-600">Empowering through knowledge and skills</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Users className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">Building stronger, united communities</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Heart className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Care</h3>
                <p className="text-gray-600">Providing compassionate support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {value.icon}
                  <h3 className="text-xl font-bold ml-4">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Motto</h2>
          <p className="text-xl">Impacting Hearts-Heads and Hands</p>
        </div>
      </section>
    </div>
  );
};

export default About;