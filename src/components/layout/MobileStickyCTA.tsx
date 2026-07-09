import { useState, useEffect } from 'react';
import { propertyInfo } from '../../content/data';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 500px)
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/85 backdrop-blur-md border-t border-brand-brown/10 p-4 pb-safe">
      <a
        href={`tel:${propertyInfo.phoneHref}`}
        className="block w-full bg-brand-brown hover:bg-brand-brown-dark text-white text-center font-semibold py-4 rounded-xl shadow-lg transition-colors"
      >
        Zadzwoń: {propertyInfo.phoneDisplay}
      </a>
    </div>
  );
}
