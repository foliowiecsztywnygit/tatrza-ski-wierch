import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { opinions, propertyInfo } from '../../content/data';
import { FadeIn, StaggerContainer, StaggerItem } from '../ui/FadeIn';
import { Parzenica } from '../ui/Icons';

export function Testimonials() {
  return (
    <Section background="default" ornament>
      <FadeIn className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading mb-4 text-foreground-heading">Opinie Gości</h2>
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-background-card border border-brand-brown/10 mt-2">
          <div className="flex text-accent-yellow">
            {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
          </div>
          <span className="font-semibold text-foreground-heading">{propertyInfo.ratingLabel}</span>
          <span className="text-foreground-body/70 text-sm">({propertyInfo.reviewsLabel})</span>
        </div>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {opinions.map((opinion) => (
          <StaggerItem key={opinion.id}>
            <Card hover className="p-8 relative h-full flex flex-col justify-between">
              <Parzenica className="absolute top-6 right-6 text-brand-brown/10 w-12 h-12" />
              <div>
                <div className="flex text-accent-yellow mb-6">
                  {Array.from({ length: opinion.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-lg font-body italic text-foreground-heading mb-8 leading-relaxed">
                  "{opinion.quote}"
                </p>
              </div>
              <p className="font-semibold text-brand-brown tracking-wide uppercase text-sm">
                — {opinion.author}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
