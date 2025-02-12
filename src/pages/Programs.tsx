import { Heart, Users, Building2, BookOpen } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      title: "Healing, Peace-Building and Reconciliation",
      description: "We facilitate genuine healing and reconciliation through empowering and working with influential leaders and community members through running Mental Health and Psycho-social Support's projects and other related initiatives.",
      projects: [
        "Healing the Wounds of Ethnic Conflicts (HWEC)",
        "Community Based Socio-therapy (CBS)-Niponye Nikuponye",
        "Active Bystandership Development- Sindebera",
        "Prevention of the ideology of hate, genocide and hate crimes in Africa",
        "Cultural Festival of songs and dances for peace",
        "Self-Care and Debriefing"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Abundant Leadership Development",
      description: "Having witnessed what toxic leaders are capable of- destruction (corruption and exploitation and violence), in providing communities with servant leaders having a heart and motivation of serving their fellows by promoting unity, innovating economic opportunities remain the most path to community transformation.",
      projects: [
        "Active Bystandership Development for positive changes",
        "Servant leadership",
        "Corruption fighting"
      ]
    },
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      title: "Integral Community Development",
      description: "We empower and strengthen community members as the assets, resources and strengths of their communities.",
      projects: [
        "BAHO for Development (10 days school: ABCD, Gift that Releases)",
        "Environmental prevention, promotion and protection",
        "Community Based Tourism",
        "Path way for generosity",
        "Women and Children's rights (advocacy)"
      ]
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      title: "Promoting Resilience Among Youth (PRAY)",
      description: "The risk factors related to delinquency among youth are compounded by drugs abuse, poverty, political instability, urbanization, dysfunctional family, violence, peer influence and limited income generating opportunities among others. Young people are mainly at risk not just because they may turn to substance abuse, street living and petty crimes as a way of dealing with the difficulties they face but also because they are ambitious and are in danger of being exploited.",
      projects: [
        "Establish sustainable measures to prevent the incidence of delinquency",
        "Define and implement appropriate measures to respond to cases of delinquency",
        "Develop and implement a sustainable mechanism for reintegration and follow-up of former delinquents"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1541976844346-f18aeac57b06?ixlib=rb-4.0.3")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Touching Hearts Transforming Nations</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive initiatives designed to heal, empower, and transform communities
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    {program.icon}
                    <h2 className="text-3xl font-bold ml-4 text-blue-900">{program.title}</h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-6">{program.description}</p>
                  <div className="bg-white rounded-lg p-6">
                    <h3 className="text-xl font-extrabold mb-4 text-blue-600">Projects</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {program.projects.map((project, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;