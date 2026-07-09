import { Helmet } from 'react-helmet-async';
import { ContactForm } from '../components/sections/ContactForm';
import { FadeIn } from '../components/ui/FadeIn';
import { propertyInfo } from '../content/data';

export default function ContactPage() {
  return (
    <div className="pt-24">
      <Helmet>
        <title>Kontakt | {propertyInfo.name}</title>
        <meta name="description" content="Skontaktuj się z Tatrzańskim Wierchem w Bańskiej Wyżnej. Sprawdź telefon, adres i formularz, aby potwierdzić ceny oraz dostępność pokoi i apartamentów." />
      </Helmet>

      <FadeIn className="container mt-8 mb-8">
        <h1 className="text-4xl md:text-5xl font-heading mb-4 text-center text-foreground-heading uppercase">Kontakt</h1>
        <p className="text-center text-foreground-body font-body text-lg max-w-2xl mx-auto">
          Masz pytania lub chcesz zarezerwować pobyt? Zadzwoń albo zostaw szczegóły, a dopasujemy najlepszy pokój lub apartament.
        </p>
      </FadeIn>

      <ContactForm />
    </div>
  );
}
