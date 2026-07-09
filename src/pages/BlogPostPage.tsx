import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { blogPosts, blogCategories } from '../content/blog';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/FadeIn';
import { AppImage } from '../components/ui/AppImage';
import { propertyInfo } from '../content/data';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);
  const categoryTitle = blogCategories.find(c => c.id === post.category)?.title || post.category;

  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>{post.metaTitle || post.title}</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        {/* Article Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${post.title}",
              "image": "${post.image}",
              "datePublished": "${post.date}",
              "author": {
                "@type": "Organization",
                "name": "${propertyInfo.name}"
              }
            }
          `}
        </script>
      </Helmet>

      <Section>
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="text-sm text-foreground-body/70 font-ui tracking-widest uppercase mb-8 flex items-center gap-2">
            <Link to="/blog" className="hover:text-brand-brown transition-colors">Blog</Link>
            <span>/</span>
            <Link to={`/blog/temat/${post.category}`} className="hover:text-brand-brown transition-colors">{categoryTitle}</Link>
            <span>/</span>
            <span className="text-brand-brown truncate">{post.title}</span>
          </nav>

          <FadeIn className="mb-8">
            <div className="text-brand-brown font-ui mb-4 uppercase tracking-widest text-sm">{categoryTitle}</div>
            <h1 className="text-4xl md:text-5xl font-heading mb-6 leading-tight text-foreground-heading uppercase">{post.title}</h1>
            <div className="text-foreground-body/70 font-body text-sm">{post.date}</div>
          </FadeIn>

          <FadeIn delay={0.2} className="aspect-[16/9] rounded-lg overflow-hidden mb-12 shadow-sm">
            <AppImage src={post.image} alt={post.title} className="w-full h-full object-cover" fallbackSrc="/images/placeholders/landscape.svg" />
          </FadeIn>

          <FadeIn delay={0.3}
            className="prose prose-lg max-w-none text-foreground-body font-body prose-headings:font-heading prose-headings:font-normal prose-headings:text-foreground-heading prose-headings:uppercase prose-a:text-brand-brown hover:prose-a:text-accent-yellow mb-16"
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </FadeIn>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="border-t border-brand-brown/10 pt-12">
              <h3 className="text-2xl font-heading mb-6 text-foreground-heading uppercase">Podobne wpisy</h3>
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map(rp => (
                  <StaggerItem key={rp.id}>
                    <Link to={`/blog/${rp.slug}`} className="group flex gap-4 items-center bg-background-card p-4 rounded-lg shadow-sm border border-transparent hover:border-brand-brown/20 transition-all">
                      <AppImage src={rp.image} alt={rp.title} className="w-24 h-24 rounded object-cover group-hover:opacity-80 transition-opacity" fallbackSrc="/images/placeholders/square.svg" />
                      <div>
                        <h4 className="font-heading text-lg text-foreground-heading uppercase group-hover:text-brand-brown transition-colors line-clamp-2">{rp.title}</h4>
                        <p className="text-sm text-foreground-body/70 font-body mt-1">{rp.date}</p>
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
