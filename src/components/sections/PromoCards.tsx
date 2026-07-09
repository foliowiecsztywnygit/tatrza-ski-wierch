import { Section } from '../ui/Section';
import { StaggerContainer, StaggerItem } from '../ui/FadeIn';

export function PromoCards() {
  const promos = [
    {
      id: 1,
      label: 'Lokalizacja',
      title: 'Bańska Wyżna i panorama Tatr',
      description: 'Spokojne położenie daje odpoczynek od tłoku, a widok na góry towarzyszy Ci od rana do wieczora.',
    },
    {
      id: 2,
      label: 'Atrakcje',
      title: 'Termy i narty blisko obiektu',
      description: 'Termy Chochołowskie i CzerwienneSki są na tyle blisko, że łatwo zaplanować aktywny dzień bez pośpiechu.',
    },
    {
      id: 3,
      label: 'Dla rodzin',
      title: 'Plac zabaw i przestrzeń na zewnątrz',
      description: 'Na dzieci czekają trampolina, huśtawka i piaskownica, a dorośli mogą odpocząć przy grillu i leżakach.',
    },
    {
      id: 4,
      label: 'Rezerwacja',
      title: 'Kameralny obiekt, szybki kontakt',
      description: 'Ceny zależą od sezonu i długości pobytu, dlatego najwygodniej zadzwonić i od razu potwierdzić termin.',
    }
  ];

  return (
    <Section background="default" className="py-24">
      <div className="container flex flex-col items-center">
        <div className="inline-flex items-center justify-center px-6 py-2 bg-brand-brown text-white font-ui uppercase text-sm tracking-widest rounded-pill mb-12 shadow-md z-10 -mt-32">
          Dlaczego warto
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {promos.map((promo) => (
            <StaggerItem key={promo.id}>
              <div className="rounded-lg overflow-hidden flex flex-col h-[400px] shadow-card app-transition hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] cursor-pointer group">
                <div className="h-full bg-accent-yellow flex flex-col items-center justify-center p-8 text-center">
                  <span className="font-ui uppercase text-[10px] tracking-widest text-brand-brown-dark/70 mb-3">
                    {promo.label}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl text-brand-brown-dark m-0 leading-tight">
                    {promo.title}
                  </h3>
                  <p className="mt-4 text-brand-brown-dark/80 font-body leading-relaxed">
                    {promo.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
