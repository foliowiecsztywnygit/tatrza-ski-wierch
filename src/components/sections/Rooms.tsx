import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { rooms } from '../../content/data';
import { Users, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from '../ui/FadeIn';
import { AppImage } from '../ui/AppImage';

export function Rooms() {
  return (
    <Section background="default" id="pokoje">
      <FadeIn className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-heading text-foreground-heading mb-4 uppercase">Nasze Pokoje</h2>
        <p className="text-foreground-body font-body text-lg">
          Pokoje 2-osobowe i apartamenty rodzinne z prywatnymi łazienkami, lodówkami, telewizorami
          oraz dostępem do aneksu kuchennego. Wybierz wariant najlepiej dopasowany do Twojego pobytu.
        </p>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <StaggerItem key={room.id} className="h-full">
            <div id={room.id} className="h-full scroll-mt-32">
              <Card hover className="flex flex-col h-full bg-background-card rounded-lg shadow-card border-none overflow-hidden">
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <AppImage 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    fallbackSrc="/images/placeholders/landscape.svg"
                  />
                  <div className="absolute top-4 right-4 bg-background-card/90 backdrop-blur-md px-3 py-1.5 rounded-pill text-sm font-ui uppercase tracking-widest flex items-center gap-1.5 shadow-sm text-foreground-heading">
                    <Users size={16} className="text-brand-brown" />
                    <span>{room.capacity}</span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-heading text-foreground-heading mb-3 uppercase">{room.name}</h3>
                  <p className="text-foreground-body font-body mb-6 flex-grow">{room.description}</p>

                  <div className="rounded-2xl bg-brand-brown/[0.04] border border-brand-brown/10 p-4 mb-6">
                    <div className="text-xs font-ui uppercase tracking-[0.22em] text-foreground-body/60 mb-2">
                      Rezerwacja i cena
                    </div>
                    <p className="text-sm text-foreground-body mb-2">{room.board}</p>
                    <p className="text-lg font-ui tracking-wide text-foreground-heading">{room.price}</p>
                  </div>
                  
                  <div className="space-y-2 mb-8">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground-body font-body">
                        <Check size={16} className="text-brand-brown shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>

                  {room.note && (
                    <div className="mb-6 rounded-2xl border border-accent-yellow/40 bg-accent-yellow/15 px-4 py-3 text-sm text-foreground-body">
                      {room.note}
                    </div>
                  )}

                  <Link 
                    to="/#zapytanie"
                    className="inline-flex items-center justify-center rounded-pill font-ui uppercase tracking-widest transition-colors focus-visible:outline-none h-12 px-6 text-sm bg-brand-brown text-white hover:bg-brand-brown-dark w-full group"
                  >
                    Zapytaj o dostępność
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </Card>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
