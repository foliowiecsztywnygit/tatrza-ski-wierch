import { FadeIn } from '../ui/FadeIn';
import { Button } from '../ui/Button';
import { RotatingRozeta } from '../ui/Icons';
import { AppImage } from '../ui/AppImage';
import { Link } from 'react-router-dom';
import { propertyInfo } from '../../content/data';

export function About() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <RotatingRozeta className="w-[800px] h-[800px] -right-[400px] top-1/2 -translate-y-1/2" />
      
      <div className="container relative z-10">
        <div className="bg-background-card rounded-lg shadow-card overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <FadeIn>
              <h3 className="text-3xl md:text-5xl font-heading text-foreground-heading mb-6 leading-tight">
                SPOKOJNY POBYT
                <br />
                Z WIDOKIEM NA TATRY
              </h3>
              <div className="prose prose-lg text-foreground-body font-body leading-relaxed max-w-none mb-10">
                <p className="mb-4">
                  {propertyInfo.name} to klimatyczna agroturystyka położona w Bańskiej Wyżnej, w miejscu stworzonym dla osób,
                  które szukają ciszy, przestrzeni i bliskości natury.
                </p>
                <p className="mb-4">
                  Na miejscu czekają przytulne pokoje i apartamenty z łazienkami, lodówkami i telewizorami, a także aneks
                  kuchenny, wspólna przestrzeń dzienna, bezpłatny parking i miejsce do grillowania.
                </p>
                <p className="mb-4">
                  To świetna baza na rodzinny wyjazd, romantyczny weekend i spokojny pobyt z dziećmi. W pobliżu są termy,
                  stoki narciarskie, szlaki spacerowe i regionalne karczmy.
                </p>
                <p>
                  Dodatkowym atutem jest panorama Tatr, którą można podziwiać z okien i balkonów oraz podczas relaksu na świeżym powietrzu.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/kontakt">
                  <Button variant="primary" size="lg">Skontaktuj się z nami</Button>
                </Link>
                <a href={propertyInfo.virtualTourUrl} target="_blank" rel="noreferrer">
                  <Button variant="secondary" size="lg">Obejrzyj spacer 360</Button>
                </a>
              </div>
            </FadeIn>
          </div>
          <div className="lg:w-1/2 min-h-[400px] relative">
            <AppImage 
              src="/zdjecia/widok_z_obiektem_2.avif" 
              alt="Widok na obiekt Tatrzański Wierch" 
              fallbackSrc="/images/placeholders/portrait.svg"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
