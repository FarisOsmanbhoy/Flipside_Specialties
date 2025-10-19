import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const BlogSummary: React.FC = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blog" className="py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Content */}
          <div className="w-full md:w-2/3 space-y-6">
            <div className="flex items-center gap-3 text-brand-500">
              <BookOpen className="h-6 w-6" />
              <h2 className="text-lg font-semibold uppercase tracking-wide">Our Blog</h2>
            </div>
            
            <h3 className="text-3xl font-bold text-slate-900">
              Industry Insights & Project Showcases
            </h3>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Stay up to date with the latest trends in commercial construction, discover innovative 
              architectural solutions, and explore our featured project case studies. Our blog covers 
              everything from door hardware specifications to partition system installations.
            </p>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigate('/blog')}
                className="group"
              >
                Read Our Blog
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Team collaboration"
              className="w-full h-[300px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSummary;