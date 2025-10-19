import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { listBucketImages } from '../lib/listBucket';

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
    imageUrl: ""
  },
  {
    name: "Saahir Vadgama",
    position: "Warehouse Manager",
    summary: "Keeps operations flowing and ensures every order goes out right and on time.",
    imageUrl: ""
  },
  {
    name: "Faris Osmanbhoy",
    position: "Assistant Project Manager",
    summary: "Supports day-to-day project coordination with speed and precision.",
    imageUrl: ""
  },
  {
    name: "John Roper",
    position: "Project Manager",
    summary: "Oversees commercial projects with clarity, structure, and experience.",
    imageUrl: ""
  },
  {
    name: "Betty Olmos",
    position: "Project Manager",
    summary: "Delivers project timelines with clear communication and no surprises.",
    imageUrl: ""
  },
  {
    name: "Jared Kinsel",
    position: "Project Manager",
    summary: "Manages complex commercial projects with attention to detail and client focus.",
    imageUrl: ""
  },
  {
    name: "Jorge Martinez",
    position: "Warehouse",
    summary: "Handles receiving, stocking, and prepping materials with care and consistency.",
    imageUrl: ""
  },
  {
    name: "Orlando",
    position: "Installer",
    summary: "On-site lead ensuring clean, compliant installs that get noticed for the right reasons.",
    imageUrl: ""
  },
  {
    name: "Phanindra Kumar",
    position: "Assistant Project Manager",
    summary: "Bridges internal workflows and vendor coordination behind the scenes.",
    imageUrl: ""
  },
  {
    name: "Mohamed Hashmi",
    position: "Assistant Project Manager",
    summary: "Keeps things moving with methodical tracking and fast turnarounds.",
    imageUrl: ""
  },
  {
    name: "Sai Teja",
    position: "Assistant Project Manager",
    summary: "Supports project managers with fast documentation and follow-through.",
    imageUrl: ""
  },
  {
    name: "Mohamed Imran",
    position: "Estimator",
    summary: "Builds fast, accurate takeoffs that help contractors quote with confidence.",
    imageUrl: ""
  },
  {
    name: "Mohamed Sameer",
    position: "Estimator",
    summary: "Delivers detailed quotes that balance value, scope, and speed.",
    imageUrl: ""
  },
  {
    name: "Pooja",
    position: "Assistant Project Manager",
    summary: "Sources and secures materials to keep every project estimated on schedule and cost effective.",
    imageUrl: ""
  }
];

const AboutPage: React.FC = () => {
  const [employeeImageMap, setEmployeeImageMap] = useState<Record<string, string>>({});
  const [loadingImages, setLoadingImages] = useState(true);
  const [imageError, setImageError] = useState<string | null>(null);

  const { ref: introRef, inView: introInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Helper function to format names to match Supabase bucket filenames
  // Supabase uses capitalized format: "Natasha-Osmanbhoy"
  const formatNameForBucket = (name: string): string => {
    return name.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join('-');
  };

  // Fetch employee images from Supabase bucket
  useEffect(() => {
    const fetchEmployeeImages = async () => {
      try {
        setLoadingImages(true);
        const imageUrls = await listBucketImages('Flipside-employees');
        
        // Create a mapping of formatted names to image URLs
        const imageMap: Record<string, string> = {};
        imageUrls.forEach(url => {
          // Extract filename from URL and remove extension
          const filename = url.split('/').pop()?.split('.')[0];
          if (filename) {
            // Store with the exact capitalized format from Supabase
            imageMap[filename] = url;
          }
        });
        
        setEmployeeImageMap(imageMap);
      } catch (err) {
        setImageError(err instanceof Error ? err.message : 'Failed to load employee images');
      } finally {
        setLoadingImages(false);
      }
    };

    fetchEmployeeImages();
  }, []);

  // Create team members array with dynamic images from Supabase
  const membersWithDynamicImages = teamMembers.map(member => {
    const formattedName = formatNameForBucket(member.name);
    const dynamicImageUrl = employeeImageMap[formattedName];

    return {
      ...member,
      imageUrl: dynamicImageUrl // Only use Supabase bucket images
    };
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
            {loadingImages && (
              <p className="text-gray-500 mt-2">Loading team images...</p>
            )}
            {imageError && (
              <p className="text-red-500 mt-2">Error loading images: {imageError}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {membersWithDynamicImages.map((member, index) => (
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
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.error('Image failed to load:', member.imageUrl);
                      // Could set a default placeholder image here if needed
                    }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-brand-500 font-medium mb-2">
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