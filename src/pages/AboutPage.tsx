import React from 'react';
import { useInView } from 'react-intersection-observer';

interface TeamMember {
  name: string;
  position: string;
  summary: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Natasha Osmanbhoy",
    position: "President",
    summary: "Leads the company with a sharp eye for detail and a deep commitment to excellence.",
    imageUrl: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
  },
  {
    name: "Saahir Vadgama",
    position: "Warehouse Manager",
    summary: "Keeps operations flowing and ensures every order goes out right and on time.",
    imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    name: "Faris Osmanbhoy",
    position: "Assistant Project Manager",
    summary: "Supports day-to-day project coordination with speed and precision.",
    imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
  },
  {
    name: "John Roper",
    position: "Project Manager",
    summary: "Oversees commercial projects with clarity, structure, and experience.",
    imageUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
  },
  {
    name: "Betty Olmos",
    position: "Project Manager",
    summary: "Delivers project timelines with clear communication and no surprises.",
    imageUrl: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg"
  },
  {
    name: "Jorge Martinez",
    position: "Warehouse",
    summary: "Handles receiving, stocking, and prepping materials with care and consistency.",
    imageUrl: "https://images.pexels.com/photos/2379xxx/pexels-photo-2379xxx.jpeg"
  },
  {
    name: "Orlando",
    position: "Installer",
    summary: "On-site lead ensuring clean, compliant installs that get noticed for the right reasons.",
    imageUrl: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg"
  },
  {
    name: "Phanindra Kumar",
    position: "Assistant Project Manager",
    summary: "Bridges internal workflows and vendor coordination behind the scenes.",
    imageUrl: "https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg"
  },
  {
    name: "Mohamed Hashmi",
    position: "Assistant Project Manager",
    summary: "Keeps things moving with methodical tracking and fast turnarounds.",
    imageUrl: "https://images.pexels.com/photos/3796218/pexels-photo-3796218.jpeg"
  },
  {
    name: "Sai Teja",
    position: "Assistant Project Manager",
    summary: "Supports project managers with fast documentation and follow-through.",
    imageUrl: "https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg"
  },
  {
    name: "Mohamed Imran",
    position: "Estimator",
    summary: "Builds fast, accurate takeoffs that help contractors quote with confidence.",
    imageUrl: "https://images.pexels.com/photos/3796219/pexels-photo-3796219.jpeg"
  },
  {
    name: "Mohamed Sameer",
    position: "Estimator",
    summary: "Delivers detailed quotes that balance value, scope, and speed.",
    imageUrl: "https://images.pexels.com/photos/2379008/pexels-photo-2379008.jpeg"
  },
  {
    name: "Pooja",
    position: "Assistant Project Manager",
    summary: "Sources and secures materials to keep every project estimated on schedule and cost effective.",
    imageUrl: "https://images.pexels.com/photos/3796220/pexels-photo-3796220.jpeg"
  }
];

const AboutPage: React.FC = () => {
  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Company Introduction */}
      <section ref={introRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${
            introInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
                alt="Construction planning"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-4xl font-bold text-slate-900">
                About Flipside Specialties
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Flipside Specialties is a woman-owned construction redistribution company based in Houston, Texas. 
                We specialize in Division 8 and Division 10 architectural products — from commercial doors and frames 
                to restroom partitions and specialty fixtures. Since our founding in 2021, we've partnered with 
                top-tier manufacturers to deliver speed, accuracy, and reliability across hundreds of commercial projects.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                What sets us apart? We close the gap — with responsive service, precise takeoffs, and seamless delivery. 
                Whether you're outfitting a medical facility or an office buildout, we're here to make the process 
                effortless and exact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section ref={teamRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              From Specs to Site — Meet the Crew
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 
                  transform hover:scale-105 p-6 text-center ${
                    teamInView 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-slate-600">
                  {member.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;