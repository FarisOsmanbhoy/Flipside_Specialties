import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Calendar, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image_url: string | null;
  published_at: string | null;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('blog_posts')
          .select('slug, title, excerpt, cover_image_url, published_at')
          .eq('status', 'published')
          .order('published_at', { ascending: false });

        if (error) throw new Error(error.message);
        setPosts(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 text-orange-500 mb-4">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Industry insights, project showcases, and the latest trends in commercial construction
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden animate-pulse">
                  <div className="aspect-video bg-gray-200"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="text-red-600 mb-4">
                <BookOpen className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p className="text-lg font-medium">Error loading blog posts</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">
                <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">No posts yet — check back soon!</p>
                <p className="text-sm">We're working on some great content for you.</p>
              </div>
            </div>
          ) : (
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {posts.map((post, index) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-orange-500 transition-all duration-300 cursor-pointer group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => {
                    // For now, just log the slug. In the future, this could navigate to the full post
                    console.log('Navigate to post:', post.slug);
                  }}
                >
                  {post.cover_image_url && (
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={post.cover_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-500 transition-colors">
                      {post.title}
                    </h2>
                    
                    {post.excerpt && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    
                    {post.published_at && (
                      <div className="flex items-center text-xs text-gray-400">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{formatDate(post.published_at)}</span>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;