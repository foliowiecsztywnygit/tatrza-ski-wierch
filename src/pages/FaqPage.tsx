import { Helmet } from 'react-helmet-async';
import { Faq } from '../components/sections/Faq';
import { propertyInfo } from '../content/data';

export default function FaqPage() {
  return (
    <div className="pt-24">
      <Helmet>
        <title>FAQ | {propertyInfo.name}</title>
        <meta name="description" content="FAQ Tatrzańskiego Wierchu: pokoje, apartamenty, aneks kuchenny, udogodnienia dla rodzin i sposób potwierdzenia dostępności." />
      </Helmet>
      <Faq />
    </div>
  );
}
