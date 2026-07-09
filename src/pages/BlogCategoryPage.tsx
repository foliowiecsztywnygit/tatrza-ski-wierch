import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { blogPosts, blogCategories } from '../content/blog';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/FadeIn';
import { AppImage } from '../components/ui/AppImage';
import { propertyInfo } from '../content/data';

export default function BlogCategoryPage() {
  const { silo } = useParams<{ silo: string }>();
  const category = blogCategories.find(c => c.id === silo);

  if (!category) {
    return <Navigate to="/blog" replace />;
  }

  const posts = blogPosts.filter(p => p.category === silo);

  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>{category.title} | Blog | {propertyInfo.shortName}</title>
        <meta name="description" content={`Wpisy na blogu z kategorii ${category.title}. Porady i ciekawostki.`} />
      </Helmet>

      <Section ornament>
        <FadeIn className="max-w-4xl mx-auto mb-12">
          <nav className="text-sm text-foreground-body/70 mb-8 flex items-center gap-2">
            <Link to="/blog" className="hover:text-accent-yellow transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground-heading truncate">{category.title}</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-heading mb-4 text-foreground-heading">{category.title}</h1>
          <p className="text-foreground-body text-lg">
            Wszystkie artykuły w tej kategorii ({posts.length})
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <StaggerItem key={post.id} className="h-full">
              <Card hover className="flex flex-col h-full border border-brand-brown/10">
                <Link to={`/blog/${post.slug}`} className="flex flex-col h-full group">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <AppImage 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      fallbackSrc="/images/placeholders/landscape.svg"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-heading mb-3 text-foreground-heading group-hover:text-accent-yellow transition-colors">{post.title}</h3>
                    <p className="text-foreground-body mb-4 flex-grow">{post.excerpt}</p>
                    <div className="text-sm text-foreground-body/70 mt-auto">
                      {post.date}
                    </div>
                  </div>
                </Link>
              </Card>
            </StaggerItem>
          ))}
          {posts.length === 0 && (
            <p className="text-foreground-body/70 col-span-full text-center py-12">
              Brak wpisów w tej kategorii.
            </p>
          )}
        </StaggerContainer>
      </Section>
    </div>
  );
}
