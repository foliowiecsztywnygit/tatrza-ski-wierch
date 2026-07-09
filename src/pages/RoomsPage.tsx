import { Helmet } from 'react-helmet-async';
import { Rooms } from '../components/sections/Rooms';
import { propertyInfo } from '../content/data';

export default function RoomsPage() {
  return (
    <div className="pt-24">
      <Helmet>
        <title>Pokoje | {propertyInfo.name}</title>
        <meta name="description" content="Poznaj pokoje 2-osobowe i apartamenty rodzinne w Tatrzańskim Wierchu w Bańskiej Wyżnej. Prywatne łazienki, lodówki, telewizory i widok na góry." />
      </Helmet>
      <Rooms />
    </div>
  );
}
