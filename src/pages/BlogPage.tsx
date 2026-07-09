import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { blogPosts, blogCategories } from '../content/blog';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/FadeIn';
import { AppImage } from '../components/ui/AppImage';
import { propertyInfo } from '../content/data';

export default function BlogPage() {
  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>Blog | {propertyInfo.name}</title>
        <meta name="description" content={`Porady i inspiracje na pobyt w Tatrach i na Podhalu. Sprawdź wpisy przygotowane z myślą o gościach ${propertyInfo.name}.`} />
      </Helmet>

      <Section ornament>
        <FadeIn className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-heading mb-4 text-foreground-heading uppercase">Nasz Blog</h1>
          <p className="text-foreground-body font-body text-lg">
            Praktyczne porady, ciekawostki i gotowe plany wycieczek.
          </p>
        </FadeIn>

        {/* Categories Hub */}
        <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-3 mb-16">
          {blogCategories.map(c => (
            <Link
              key={c.id}
              to={`/blog/temat/${c.id}`}
              className="px-6 py-2.5 rounded-pill font-ui uppercase text-sm tracking-widest transition-all duration-300 border bg-background-card border-brand-brown/20 text-brand-brown hover:bg-brand-brown hover:text-white"
            >
              {c.title}
            </Link>
          ))}
        </FadeIn>

        {/* Posts Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <StaggerItem key={post.id} className="h-full">
              <Card hover className="flex flex-col h-full border-none shadow-sm">
                <Link to={`/blog/${post.slug}`} className="flex flex-col h-full group">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <AppImage 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      fallbackSrc="/images/placeholders/landscape.svg"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-xs text-brand-brown font-ui mb-2 uppercase tracking-widest">
                      {blogCategories.find(c => c.id === post.category)?.title || post.category}
                    </div>
                    <h3 className="text-xl font-heading mb-3 text-foreground-heading uppercase group-hover:text-accent-yellow transition-colors">{post.title}</h3>
                    <p className="text-foreground-body font-body mb-4 flex-grow">{post.excerpt}</p>
                    <div className="text-sm text-foreground-body/70 font-body mt-auto">
                      {post.date}
                    </div>
                  </div>
                </Link>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </div>
  );
}
