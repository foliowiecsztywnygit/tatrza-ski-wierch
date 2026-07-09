import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../ui/FadeIn';
import { Button } from '../ui/Button';
import { propertyInfo } from '../../content/data';

export function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const update = () => {
      rafRef.current = null;
      setOffset({ x: targetRef.current.x, y: targetRef.current.y });
    };

    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      targetRef.current = {
        x: x * 18,
        y: y * 18,
      };

      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(update);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] md:min-h-[80vh] md:h-screen w-full flex flex-col justify-center md:justify-end pt-28 md:pt-0 pb-14 md:pb-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/zdjecia/widok_z_obiektem.avif")',
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(1.08)`,
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="container relative z-10 flex flex-col items-center justify-center w-full">
        <FadeIn delay={0.2} className="text-center w-full">
          <p className="mt-2 md:mt-4 text-white/90 font-hane font-medium uppercase tracking-[0.18em] md:tracking-[0.22em] text-[11px] md:text-base">
            {propertyInfo.locationLabel}
          </p>
          <h1 className="mt-3 md:mt-4 text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl font-hane text-white font-medium uppercase tracking-[0.08em] md:tracking-[0.12em] leading-[1.05]">
            Tatrzański
            <br />
            Wierch
          </h1>
          <p className="mt-4 md:mt-6 max-w-3xl mx-auto px-2 sm:px-0 text-white/90 font-body text-sm sm:text-base md:text-lg leading-relaxed">
            Kameralny pensjonat w Bańskiej Wyżnej z widokiem na Tatry, pokojami i apartamentami z łazienkami,
            aneksem kuchennym, placem zabaw oraz spokojną bazą wypadową na Podhale.
          </p>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <a href={`tel:${propertyInfo.phoneHref}`} className="hidden sm:block">
              <Button variant="primary" size="lg">
                Zadzwoń: {propertyInfo.phoneDisplay}
              </Button>
            </a>
            <a href={propertyInfo.virtualTourUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20 px-6 md:px-10"
              >
                Spacer 360
              </Button>
            </a>
            <Link to="/pokoje" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20 px-6 md:px-10"
              >
                Zobacz pokoje
              </Button>
            </Link>
          </div>
          <div className="mt-5 md:mt-8 grid w-full max-w-sm sm:max-w-none sm:flex sm:flex-wrap items-center justify-center gap-2 md:gap-3 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.16em] md:tracking-[0.2em] text-white/80 font-ui">
            <span className="rounded-pill border border-white/20 bg-black/20 px-3 md:px-4 py-2 text-center">{propertyInfo.beds}</span>
            <span className="rounded-pill border border-white/20 bg-black/20 px-3 md:px-4 py-2 text-center">{propertyInfo.roomsCount}</span>
            <span className="rounded-pill border border-white/20 bg-black/20 px-3 md:px-4 py-2 text-center">{propertyInfo.openLabel}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
