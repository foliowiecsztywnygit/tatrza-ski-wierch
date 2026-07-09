// Dane strony - informacje podstawowe, pokoje, opinie, atrakcje i FAQ

export const propertyInfo = {
  name: 'Tatrzański Wierch',
  shortName: 'Tatrzański Wierch',
  addressLine: 'ul. Szlak Papieski 343',
  cityLine: '34-424 Bańska Wyżna',
  fullAddress: 'ul. Szlak Papieski 343, 34-424 Bańska Wyżna',
  phoneDisplay: '608 492 105',
  phoneHref: '+48608492105',
  beds: 'widok na Tatry',
  roomsCount: '4 pokoje i 2 apartamenty',
  openLabel: 'aneks, parking i plac zabaw',
  ratingLabel: '5,0/5',
  reviewsLabel: '14 opinii w Google',
  locationLabel: 'Bańska Wyżna',
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Szlak%20Papieski%20343%2C%2034-424%20Ba%C5%84ska%20Wy%C5%BCna',
  mapsEmbedUrl: 'https://www.google.com/maps?q=Szlak%20Papieski%20343,%2034-424%20Ba%C5%84ska%20Wy%C5%BCna&output=embed',
  virtualTourUrl: 'https://solutions360.pl/prezentacje/tatrzanskiwierch/',
};

export const advantages = [
  {
    id: 'view',
    title: 'Widok na panoramę Tatr',
    description: 'Z okien i balkonów rozciąga się górski widok, który robi wrażenie o każdej porze roku.',
    icon: 'Mountain',
  },
  {
    id: 'rooms',
    title: 'Pokoje i apartamenty',
    description: 'Do dyspozycji gości są kameralne pokoje 2-osobowe oraz rodzinne apartamenty dla 4 i 5 osób.',
    icon: 'BedDouble',
  },
  {
    id: 'kitchen',
    title: 'Aneks kuchenny i lodówki',
    description: 'Na miejscu czeka wspólna przestrzeń kuchenna, a każdy pokój wyposażony jest w lodówkę i telewizor.',
    icon: 'UtensilsCrossed',
  },
  {
    id: 'family',
    title: 'Parking, grill i plac zabaw',
    description: 'Bezpłatny parking, miejsce do grillowania i atrakcje dla dzieci sprawiają, że łatwo tu odpocząć całą rodziną.',
    icon: 'Sparkles',
  },
];

export const rooms = [
  {
    id: 'pokoj-2-osobowy-balkon',
    name: 'Pokój 2-osobowy z balkonem',
    description: 'Pokój dwuosobowy z prywatną łazienką i balkonem, idealny na spokojny pobyt z widokiem na góry.',
    capacity: '2 osoby',
    amenities: ['Prywatna łazienka', 'Balkon', 'Łóżko podwójne', 'Telewizor', 'Lodówka', 'Pościel'],
    board: 'Cena ustalana indywidualnie - zadzwoń po aktualną ofertę i dostępność.',
    price: 'Rezerwacja telefoniczna',
    image: '/zdjecia/Pokoj 1/7785c6d5-e256-4e85-b331-37c54cde0991.avif',
  },
  {
    id: 'pokoj-2-osobowy-lazienka',
    name: 'Pokój 2-osobowy z łazienką',
    description: 'Wygodny pokój dla dwóch osób z prywatną łazienką, telewizorem i lodówką.',
    capacity: '2 osoby',
    amenities: ['Prywatna łazienka', 'Łóżko podwójne', 'Telewizor', 'Lodówka', 'Pościel'],
    board: 'Cena zależy od sezonu i długości pobytu - potwierdzenie telefonicznie.',
    price: 'Sprawdź dostępność',
    image: '/zdjecia/Pokoj 2/3fc77522-2fce-4e8e-a06d-68f91a4c418d.avif',
  },
  {
    id: 'pokoj-2-osobowy-balkon-lazienka-na-pietrze',
    name: 'Pokój 2-osobowy z balkonem',
    description: 'Pokój z balkonem, łóżkiem podwójnym i dodatkowym pojedynczym oraz dużą łazienką na piętrze.',
    capacity: '2-3 osoby',
    amenities: ['Balkon', 'Łóżko podwójne', 'Łóżko pojedyncze', 'Telewizor', 'Lodówka', 'Pościel'],
    board: 'Dobra opcja dla par lub małej rodziny - o finalnej konfiguracji i cenie decyduje termin.',
    price: 'Telefoniczna wycena pobytu',
    image: '/zdjecia/Pokoj 3/22518d60-5de2-4e2b-8f52-ec53f16ebf79.avif',
  },
  {
    id: 'pokoj-2-osobowy-standard',
    name: 'Pokój 2-osobowy standard',
    description: 'Funkcjonalny pokój dla dwóch osób z łazienką, telewizorem i lodówką na komfortowy pobyt w górach.',
    capacity: '2 osoby',
    amenities: ['Prywatna łazienka', 'Łóżko podwójne', 'Telewizor', 'Lodówka', 'Pościel'],
    board: 'Aktualne stawki zależą od sezonu i długości pobytu.',
    price: 'Zapytaj o cenę',
    image: '/zdjecia/Pokoj 4/8b3970bb-e613-4c9b-bda0-8bcc612eef2d.avif',
  },
  {
    id: 'apartament-4-osobowy',
    name: 'Apartament 4-osobowy',
    description: 'Apartament z prywatną łazienką, dużym łóżkiem małżeńskim i strefą dzienną z rozkładaną sofą.',
    capacity: '4 osoby',
    amenities: ['Prywatna łazienka', 'Łóżko podwójne', 'Sofa rozkładana', 'Telewizor', 'Lodówka', 'Pościel'],
    board: 'Świetny wybór dla rodziny lub dłuższego pobytu w kameralnym obiekcie.',
    price: 'Dostępność na telefon',
    image: '/zdjecia/Pokoj 5/80492392-021f-4686-b112-592f8493383d.avif',
  },
  {
    id: 'apartament-5-osobowy',
    name: 'Apartament 5-osobowy',
    description: 'Dwupokojowy apartament rodzinny z łazienką i widokiem na góry, przygotowany dla większej rodziny lub grupy przyjaciół.',
    capacity: '5 osób',
    amenities: ['Widok na góry', 'Prywatna łazienka', 'Łóżko podwójne', 'Łóżka pojedyncze', 'Telewizor', 'Lodówka'],
    board: 'Na życzenie można przygotować łóżeczko dla niemowlęcia.',
    price: 'Skontaktuj się po szczegóły',
    note: 'Najlepiej zadzwonić, aby dobrać apartament do liczby gości i terminu.',
    image: '/zdjecia/Pokoj 5/8676aeae-4125-4074-97a0-c1a0e67b57e1.avif',
  },
];

export const opinions = [
  {
    id: 1,
    author: 'Małgorzata B',
    quote: 'Dobra lokalizacja z pięknym widokiem na góry. Duże, wygodne łóżko, a aneks i kuchnia bardzo ułatwiają pobyt.',
    rating: 5,
  },
  {
    id: 2,
    author: 'Michał Witak',
    quote: 'Bardzo przyjemne miejsce na pobyt. Wszystko jest nowo wyremontowane, zadbane i przygotowane z myślą o wygodzie gości.',
    rating: 5,
  },
  {
    id: 3,
    author: 'Axleis',
    quote: 'Świetna lokalizacja, widok z balkonu zapiera dech w piersiach, a całe miejsce idealnie nadaje się na spokojny wypoczynek.',
    rating: 5,
  },
];

export const attractions = [
  {
    id: 'termy',
    title: 'Termy Chochołowskie',
    description: 'Największy kompleks basenów termalnych w Polsce znajduje się około 15 minut jazdy od obiektu.',
    link: '/blog',
    image: '/zdjecia/widok_z_obiektem.avif',
  },
  {
    id: 'narty',
    title: 'CzerwienneSki',
    description: 'Bliski wyciąg narciarski sprawdza się zimą przy rodzinnych wyjazdach i rekreacyjnej jeździe.',
    link: '/blog',
    image: '/zdjecia/widok_z_obiektem_2.avif',
  },
  {
    id: 'kuchnia',
    title: 'Karczma WiYRCHowo',
    description: 'Regionalna kuchnia i góralski klimat są na wyciągnięcie ręki, gdy nie planujesz gotować na miejscu.',
    link: '/blog',
    image: '/zdjecia/kuchnia/0656bf63-1b66-49e1-a7f8-f08f47e0a1a3.avif',
  },
];

export const faqData = [
  {
    question: 'Gdzie znajduje się Tatrzański Wierch?',
    answer: 'Obiekt mieści się pod adresem ul. Szlak Papieski 343, 34-424 Bańska Wyżna. To spokojna baza wypadowa blisko Zakopanego i atrakcji Podhala.',
  },
  {
    question: 'Jakie pokoje są dostępne?',
    answer: 'Do dyspozycji gości są cztery pokoje 2-osobowe oraz dwa apartamenty rodzinne: 4-osobowy i 5-osobowy.',
  },
  {
    question: 'Jakie udogodnienia znajdę na miejscu?',
    answer: 'Goście mają dostęp do prywatnych łazienek, telewizorów, lodówek, aneksu kuchennego, bezpłatnego parkingu, miejsca do grillowania i placu zabaw.',
  },
  {
    question: 'Czy wszystkie pokoje mają balkon i widok na Tatry?',
    answer: 'Wybrane pokoje posiadają balkon, a z obiektu roztacza się szeroki widok na Tatry. Szczegóły konkretnego pokoju najlepiej potwierdzić telefonicznie.',
  },
  {
    question: 'Czy można przygotowywać posiłki samodzielnie?',
    answer: 'Tak. W obiekcie dostępny jest aneks kuchenny, a w pokojach znajdują się lodówki i podstawowe udogodnienia do wygodnego pobytu.',
  },
  {
    question: 'Czy to dobre miejsce dla rodzin z dziećmi?',
    answer: 'Tak. Na terenie obiektu są plac zabaw, trampolina, huśtawka, piaskownica oraz bezpieczna przestrzeń do spędzania czasu na świeżym powietrzu.',
  },
  {
    question: 'Jak sprawdzić cenę i dostępność?',
    answer: 'Ceny zależą od sezonu i długości pobytu. Najszybciej potwierdzisz termin oraz aktualną stawkę, dzwoniąc pod numer 608 492 105.',
  },
  {
    question: 'Czy można dostać łóżeczko dla niemowlęcia?',
    answer: 'Tak, na życzenie gości istnieje możliwość dostawienia łóżeczka dla niemowlęcia.',
  },
];
