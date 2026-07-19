import { Link } from 'react-router-dom';
import { propertyInfo } from '../../content/data';

export function Footer() {
  return (
    <footer className="w-[96%] mx-auto bg-brand-brown rounded-t-[24px] pt-16 pb-12 mt-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
        
        {/* Column 1 */}
        <div>
          <h3 className="font-heading text-2xl text-white mb-6">NASZE ATUTY</h3>
          <ul className="space-y-4">
            {['Widok na Tatry i spokojna lokalizacja', 'Pokoje i apartamenty rodzinne', 'Aneks kuchenny, lodówki i prywatne łazienki', 'Parking i miejsce do grillowania'].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-white/90 font-body">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-accent-yellow shrink-0 mt-1.5">
                  <path d="M12 2L22 20H2L12 2Z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center text-center">
          <Link to="/" className="text-3xl font-heading text-white tracking-widest mb-6 hover:text-accent-yellow transition-colors">
            TATRZAŃSKI WIERCH
          </Link>
          <div className="font-ui text-white/80 space-y-2 text-sm uppercase tracking-wide">
            <p>{propertyInfo.addressLine}</p>
            <p>{propertyInfo.cityLine}</p>
            <a href={`tel:${propertyInfo.phoneHref}`} className="block mt-4 hover:text-accent-yellow transition-colors">{propertyInfo.phoneDisplay}</a>
            {propertyInfo.email && (
              <a href={`mailto:${propertyInfo.email}`} className="block hover:text-accent-yellow transition-colors">{propertyInfo.email}</a>
            )}
            <p className="mt-4">Spacer 360 i szybka rezerwacja</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="md:text-right">
          <h3 className="font-heading text-2xl text-white mb-6">NA SKRÓTY</h3>
          <ul className="space-y-3 font-ui uppercase text-sm tracking-widest">
            <li><Link to="/pokoje" className="text-white/80 hover:text-accent-yellow transition-colors">Pokoje</Link></li>
            <li><Link to="/galeria" className="text-white/80 hover:text-accent-yellow transition-colors">Galeria</Link></li>
            <li><Link to="/blog" className="text-white/80 hover:text-accent-yellow transition-colors">Blog</Link></li>
            <li><Link to="/faq" className="text-white/80 hover:text-accent-yellow transition-colors">FAQ</Link></li>
            <li><Link to="/kontakt" className="text-white/80 hover:text-accent-yellow transition-colors">Kontakt</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col items-center gap-3 font-ui text-white/50 text-[10px] sm:text-xs tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} TATRZAŃSKI WIERCH. WSZELKIE PRAWA ZASTRZEŻONE.</p>
        <a 
          href="https://www.webbroskidev.pl" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-accent-yellow transition-colors opacity-60 hover:opacity-100"
        >
          Projekt i Hosting: Krzysztof Żebrowski
        </a>
      </div>
    </footer>
  );
}
