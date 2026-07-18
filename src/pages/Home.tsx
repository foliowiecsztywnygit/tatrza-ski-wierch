import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/sections/Hero';
import { Advantages } from '../components/sections/Advantages';
import { About } from '../components/sections/About';
import { RoomsSection } from '../components/sections/RoomsSection';
import { PromoCards } from '../components/sections/PromoCards';
import { Testimonials } from '../components/sections/Testimonials';
import { Location } from '../components/sections/Location';
import { ContactForm } from '../components/sections/ContactForm';
import { Faq } from '../components/sections/Faq';
import { VirtualTourSection } from '../components/sections/VirtualTourSection';
import { GoralskiDivider } from '../components/ui/Icons';
import { propertyInfo } from '../content/data';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{propertyInfo.name} | Noclegi w Bańskiej Wyżnej z widokiem na Tatry</title>
        <meta 
          name="description" 
          content="Tatrzański Wierch w Bańskiej Wyżnej oferuje kameralne pokoje i apartamenty, widok na Tatry, aneks kuchenny, parking i spacer 360 obiektu." 
        />
      </Helmet>

      <Hero />
      <Advantages />
      <GoralskiDivider />
      <About />
      <GoralskiDivider />
      <RoomsSection />
      <GoralskiDivider />
      <PromoCards />
      <GoralskiDivider />
      <VirtualTourSection />
      <GoralskiDivider />
      <Testimonials />
      <GoralskiDivider />
      <Location />
      <GoralskiDivider />
      <ContactForm />
      <Faq />
    </>
  );
}
