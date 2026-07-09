import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { FadeIn } from '../ui/FadeIn';
import { propertyInfo } from '../../content/data';

export function Location() {
  return (
    <Section background="default" id="lokalizacja" className="py-24">
      <div className="container">
        <Card className="flex flex-col lg:flex-row overflow-hidden shadow-card">
          <div className="lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-heading text-foreground-heading mb-6">
                Lokalizacja
              </h2>
              <div className="prose prose-lg text-foreground-body font-body leading-relaxed max-w-none">
                <p className="mb-6">
                  {propertyInfo.name} znajduje się pod adresem {propertyInfo.fullAddress}, w spokojnej części Podhala,
                  skąd szybko dojedziesz do Zakopanego, term i okolicznych stoków.
                </p>
                <p>
                  W najbliższym otoczeniu czekają Termy Chochołowskie, wyciąg CzerwienneSki, regionalna karczma
                  WiYRCHowo oraz trasy spacerowe i szlaki idealne na aktywny wypoczynek przez cały rok.
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="lg:w-1/2 min-h-[400px] lg:min-h-full relative">
            <iframe
              src={propertyInfo.mapsEmbedUrl}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title={`Mapa: ${propertyInfo.name}`}
            />
          </div>
        </Card>
      </div>
    </Section>
  );
}
