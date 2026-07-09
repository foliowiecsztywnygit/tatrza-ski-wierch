import { Section } from '../ui/Section';
import { FadeIn } from '../ui/FadeIn';
import { Button } from '../ui/Button';
import { propertyInfo } from '../../content/data';

export function VirtualTourSection() {
  return (
    <Section id="spacer-360" background="card" className="py-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs font-ui tracking-[0.24em] uppercase text-foreground-body/60 mb-4">
            Spacer 360
          </div>
          <h2 className="text-4xl md:text-5xl font-heading text-foreground-heading mb-4">
            Zobacz {propertyInfo.shortName} od środka
          </h2>
          <p className="text-foreground-body text-lg">
            Przejdź po obiekcie w wirtualnym spacerze 360 i sprawdź układ wnętrz jeszcze przed rezerwacją.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="rounded-[28px] overflow-hidden border border-brand-brown/10 bg-background-card shadow-card">
          <div className="aspect-[16/10] bg-background">
            <iframe
              src={propertyInfo.virtualTourUrl}
              title={`Spacer 360 - ${propertyInfo.name}`}
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-8 flex justify-center">
          <a href={propertyInfo.virtualTourUrl} target="_blank" rel="noreferrer">
            <Button variant="secondary" size="lg">
              Otwórz spacer w nowej karcie
            </Button>
          </a>
        </FadeIn>
      </div>
    </Section>
  );
}
