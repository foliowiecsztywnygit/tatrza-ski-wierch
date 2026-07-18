import { FadeIn } from '../ui/FadeIn';
import { Button } from '../ui/Button';
import { RotatingRozeta } from '../ui/Icons';
import { AppImage } from '../ui/AppImage';
import { Link } from 'react-router-dom';

export function RoomsSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <RotatingRozeta className="w-[600px] h-[600px] -left-[300px] top-1/2 -translate-y-1/2" />
      
      <div className="container relative z-10">
        <div className="bg-background-card rounded-lg shadow-card overflow-hidden flex flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <FadeIn>
              <h3 className="text-3xl md:text-5xl font-heading text-foreground-heading mb-6 leading-tight">
                KAMERALNE POKOJE
                <br />
                I RODZINNE APARTAMENTY
              </h3>
              <div className="prose prose-lg text-foreground-body font-body leading-relaxed max-w-none mb-10">
                <p>
                  W ofercie Tatrzańskiego Wierchu znajdują się cztery pokoje 2-osobowe, pokój 5-osobowy oraz apartament
                  przygotowany z myślą o rodzinach i gościach, którzy chcą mieć więcej przestrzeni.
                </p>
                <p className="mb-0">
                  Każda opcja zakwaterowania zapewnia wygodny standard pobytu, a wybrane pokoje mają balkon i widok
                  na góry. Na życzenie można także przygotować łóżeczko dla niemowlęcia.
                </p>
              </div>
              <Link to="/pokoje">
                <Button variant="primary" size="lg">Sprawdź ofertę pokoi</Button>
              </Link>
            </FadeIn>
          </div>
          <div className="lg:w-1/2 min-h-[400px] relative">
            <AppImage 
              src="/zdjecia/Pokoj 5/ee78c49a-d654-4e1f-99a8-1892af44380a.avif" 
              alt="Apartament rodzinny w Tatrzańskim Wierchu" 
              fallbackSrc="/images/placeholders/square.svg"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
