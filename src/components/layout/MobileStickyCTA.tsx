import { useState, useEffect } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { propertyInfo } from '../../content/data';

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const smsHref = `sms:${propertyInfo.phoneHref}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 180);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3">
      <a
        href={`tel:${propertyInfo.phoneHref}`}
        className="inline-flex items-center gap-3 rounded-full bg-brand-brown text-white shadow-[0_14px_35px_rgba(0,0,0,0.22)] px-4 py-3 transition-colors hover:bg-brand-brown-dark"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/12">
          <Phone className="h-5 w-5" />
        </span>
        <span className="pr-1 text-sm font-ui uppercase tracking-wider">Telefon</span>
      </a>
      <a
        href={smsHref}
        className="inline-flex items-center gap-3 rounded-full border border-brand-brown/15 bg-white/95 text-brand-brown shadow-[0_14px_35px_rgba(0,0,0,0.14)] px-4 py-3 transition-colors hover:bg-white"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-yellow/25">
          <MessageCircle className="h-5 w-5" />
        </span>
        <span className="pr-1 text-sm font-ui uppercase tracking-wider">SMS</span>
      </a>
    </div>
  );
}
