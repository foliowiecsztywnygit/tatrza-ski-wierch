import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { rooms } from '@/content/data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileRoomsOpen, setIsMobileRoomsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileRoomsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Pokoje', href: '/pokoje' },
    { name: 'Galeria', href: '/galeria' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="container">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <div className="md:hidden">
            <button
              className={cn(
                'p-2 rounded-full border transition-colors',
                isScrolled ? 'bg-black/45 border-white/15 text-white' : 'bg-black/30 border-white/10 text-white'
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <div className="hidden md:flex justify-center">
            <nav
              className={cn(
                'rounded-full border backdrop-blur-md shadow-lg px-8 py-3',
                isScrolled ? 'bg-black/55 border-white/20' : 'bg-black/35 border-white/15'
              )}
            >
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => {
                  if (link.name !== 'Pokoje') {
                    return (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-white/95 hover:text-white transition-colors font-ui uppercase text-xs tracking-[0.22em] py-2"
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={link.name} className="relative group">
                      <div className="flex items-center gap-1">
                        <Link
                          to={link.href}
                          className="text-white/95 hover:text-white transition-colors font-ui uppercase text-xs tracking-[0.22em] py-2"
                        >
                          {link.name}
                        </Link>
                        <ChevronDown className="w-4 h-4 text-white/80 transition-transform duration-200 group-hover:rotate-180" />
                      </div>
                      <div className="absolute top-full left-0 mt-3 w-[300px] bg-black/75 backdrop-blur-md border border-white/15 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl z-50 rounded-2xl overflow-hidden">
                        <Link
                          to="/pokoje"
                          className="block px-5 py-4 text-white font-ui uppercase tracking-[0.18em] text-xs hover:bg-white/[0.06] transition-colors"
                        >
                          Wszystkie pokoje
                        </Link>
                        <div className="h-px bg-white/10" />
                        {rooms.map((room) => (
                          <Link
                            key={room.id}
                            to={`/pokoje#${room.id}`}
                            className="block px-5 py-3 text-white/85 hover:text-white hover:bg-white/[0.06] transition-colors"
                          >
                            {room.name}
                          </Link>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <Link to="/" className="justify-self-end text-right">
            <span
              className={cn(
                'block text-white font-hane uppercase tracking-[0.18em] transition-all',
                isScrolled ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'
              )}
            >
              Tatrzański
            </span>
            <span className="block text-white/80 font-ui uppercase tracking-[0.28em] text-[10px] md:text-xs">
              Wierch
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/85 backdrop-blur-md shadow-xl border-t border-white/10">
          <nav className="container py-6 flex flex-col gap-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => {
                if (link.name !== 'Pokoje') {
                  return (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-white font-ui uppercase tracking-[0.18em] hover:text-white/80 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={link.name}>
                    <button
                      type="button"
                      onClick={() => setIsMobileRoomsOpen(v => !v)}
                      className="w-full flex items-center justify-between text-white font-ui uppercase tracking-[0.18em] hover:text-white/80 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", isMobileRoomsOpen && "rotate-180")} />
                    </button>
                    {isMobileRoomsOpen && (
                      <div className="mt-3 pl-3 border-l border-white/15 flex flex-col">
                        <Link
                          to="/pokoje"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="py-2 text-xs font-ui uppercase tracking-[0.22em] text-white hover:text-white/80 transition-colors"
                        >
                          Wszystkie pokoje
                        </Link>
                        {rooms.map((room) => (
                          <Link
                            key={room.id}
                            to={`/pokoje#${room.id}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="py-2 text-white/85 hover:text-white transition-colors"
                          >
                            {room.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
