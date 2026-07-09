export const blogCategories = [
  { id: 'noclegi', title: 'Noclegi' },
  { id: 'weekend', title: 'Weekend w Zakopanem' },
  { id: 'szlaki', title: 'Szlaki Górskie' },
  { id: 'atrakcje', title: 'Atrakcje' },
];

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt: string;
  content: string;
  category: (typeof blogCategories)[number]['id'];
  date: string;
  image: string;
  keywords: string[];
};

export const blogPosts = [
  {
    id: '1',
    slug: 'szlak-na-poranek-bez-tlumow-zakopane',
    title: 'Szlak idealny na poranek. Gdzie pójść w Tatry, żeby uniknąć tłumów?',
    metaTitle: 'Spokojne szlaki Zakopane rano: Strążyska, Nosal',
    metaDescription: 'Poranne trasy w Zakopanem: Dolina Strążyska, Droga pod Reglami i Nosal. Konkretny plan, gdy chcesz iść w góry bez tłumów.',
    excerpt: 'Poranne trasy w Zakopanem: Strążyska, Droga pod Reglami i Nosal. Jak wyjść wcześnie, przejść 2–3h i wrócić na spokojne śniadanie.',
    content: `
<p>Poranek w Tatrach ma własny rytm: chłodne powietrze, puste ścieżki i światło, które porządkuje krajobraz. Jeśli interesują Cię <strong>spokojne szlaki w Zakopanem</strong> i chcesz wiedzieć <strong>gdzie w góry bez tłumów</strong>, trzy klasyki w porannym ustawieniu robią różnicę: <strong>Dolina Strążyska</strong>, <strong>Droga pod Reglami</strong> i <strong>Nosal</strong>.</p>

<h2>Dlaczego rano wygrywa (i jak to wykorzystać)</h2>
<p>Nie potrzebujesz „tajnych” miejsc. Wystarczy zmiana godziny i proste zasady logistyki.</p>
<ul>
  <li><strong>Pora:</strong> wyjście 7:00–8:00 (latem nawet 6:30).</li>
  <li><strong>Plan minimum:</strong> trasa 2–3 godziny, powrót bez pośpiechu.</li>
  <li><strong>Komfort:</strong> jeśli cenisz <strong>wille blisko TPN</strong>, poranne wyjście nie staje się projektem do „ogarnięcia”.</li>
</ul>

<h2>Dolina Strążyska: krótko, zielono, z konkretnym celem</h2>
<p>W południe bywa gęsto. Rano jest spokojniej – to świetny wybór na pierwszy dzień albo lekki start po podróży.</p>
<h3>Jak iść, żeby było cicho</h3>
<ul>
  <li>Idź płynnie do <strong>Polany Strążyskiej</strong>.</li>
  <li>Dla „kropki nad i” podejdź do <strong>Wodospadu Siklawica</strong> (krótki odcinek, dobry finał).</li>
  <li>Weź termos i zrób 10 minut przerwy zanim zrobi się ruch.</li>
</ul>

<h2>Droga pod Reglami: tatrzański spacer w wersji „quiet luxury”</h2>
<p>To jedna z najlepszych odpowiedzi na pytanie <strong>gdzie w góry bez tłumów</strong>, gdy nie chcesz wchodzić wysoko. Możesz zawrócić w dowolnym momencie, a las i reglowy klimat robią swoje.</p>
<h3>Najlepszy wariant na poranek</h3>
<p><strong>Strążyska → odcinek Drogi pod Reglami → powrót</strong>. Dostajesz miks lasu, otwarć i sensownego dystansu bez presji.</p>

<h2>Nosal: szybkie wejście, duży efekt</h2>
<p>Idealny, jeśli chcesz „złapać wysokość” bez całego dnia w trasie.</p>
<ul>
  <li>Wejdź <strong>przed 9:00</strong>.</li>
  <li>Uważaj na śliskie fragmenty po deszczu lub przy przymrozkach.</li>
  <li>Zrób krótki przystanek na górze i schodź, zanim zrobi się tłoczno.</li>
</ul>

<h2>Gotowy plan poranka (2–3 godziny)</h2>
<ul>
  <li><strong>Najspokojniej:</strong> Droga pod Reglami + fragment Strążyskiej.</li>
  <li><strong>Najbardziej „tatrzańsko”:</strong> Strążyska + Siklawica.</li>
  <li><strong>Najbardziej dynamicznie:</strong> Nosal + szybki powrót na śniadanie.</li>
</ul>

<p><strong>CTA:</strong> Jeśli chcesz Zakopane w wersji spokojnej i dobrze zaplanowanej, poranek jest Twoim sprzymierzeńcem. Zarezerwuj pobyt w Tatrzańskim Wierchu i zaplanuj krótkie wyjścia do TPN w rytmie ciszy, nie tłumu.</p>
`.trim(),
    category: 'szlaki',
    date: '2026-06-07',
    image: '/zdjecia/widok_z_obiektem.avif',
    keywords: ['spokojne szlaki Zakopane', 'gdzie w góry bez tłumów', 'Dolina Strążyska', 'Droga pod Reglami', 'Nosal', 'wille blisko TPN']
  },
  {
    id: '2',
    slug: 'gdzie-zjesc-zakopane-bez-krupowek',
    title: 'Zakopane kulinarnie: 5 miejsc, w których zjesz autentycznie i ze smakiem (bez Krupówek)',
    metaTitle: 'Gdzie zjeść w Zakopanem bez Krupówek? 5 adresów',
    metaDescription: '5 sprawdzonych miejsc poza Krupówkami: regionalnie, nowocześnie i z jakością. Konkretne rekomendacje dla wymagających.',
    excerpt: '5 adresów poza Krupówkami: regionalnie, nowocześnie, z dobrym produktem. Prosty plan kulinarny na 48 godzin.',
    content: `
<p>Zapytanie „<strong>gdzie zjeść Zakopane</strong>” jest proste, ale odpowiedź bywa trudna: sporo lokali gra na masowy ruch. Tymczasem Podhale potrafi smakować nowocześnie – lżej, sezonowo i z szacunkiem do produktu. Oto 5 adresów poza Krupówkami, które dobrze bronią się jakością.</p>

<h2>1) Karczma u Wnuka – klasyka, która broni się smakiem</h2>
<p>To kuchnia tradycyjna bez udawania. Wybór na pierwszy wieczór, kiedy chcesz zjeść regionalnie, ale konkretnie.</p>
<ul>
  <li>poluj na dania z jagnięciną (jeśli są w karcie)</li>
  <li>kwaśnica traktowana jak danie, nie „atrakcja”</li>
</ul>

<h2>2) Zohylina Wyżnio – regionalnie, ale z charakterem</h2>
<p>Miejsce znane, jednak przy dobrym wyborze dań i w rozsądnej porze potrafi być świetnym „tatrzańskim” wieczorem.</p>
<ul>
  <li>w weekendy rezerwacja ma sens</li>
  <li>najlepiej sprawdza się jako spokojna kolacja, nie obiad w szczycie</li>
</ul>

<h2>3) Javorina – regionalne inspiracje w estetycznym wydaniu</h2>
<p>Dobry adres, jeśli szukasz połączenia podhalańskich smaków i bardziej nowoczesnej prezentacji. Pasuje do klimatu „modern alpine”.</p>

<h2>4) Ziębówka (Kościelisko) – oddech poza centrum</h2>
<p>Kościelisko to świetny kierunek, gdy cenisz spokój. Ziębówka bywa dobrym domknięciem dnia po spacerze reglowym.</p>

<h2>5) Kawa i deser „bez przesady” (Kuźnice / Kościelisko)</h2>
<p>Wybieraj miejsca, gdzie kawa jest traktowana serio, a desery są czyste i lekkie – bez cukrowych dekoracji. To idealny finał po termach.</p>

<h2>Mini-plan kulinarny na 48 godzin</h2>
<ul>
  <li><strong>Dzień 1:</strong> późne śniadanie → klasyczna kolacja (u Wnuka / Zohylina) → spokojny spacer.</li>
  <li><strong>Dzień 2:</strong> poranny szlak (Strążyska / Reglami) → obiad w Kościelisku → kawa i deser.</li>
</ul>

<p><strong>CTA:</strong> Jeśli chcesz Zakopane z dobrym rytmem (szlak rano, termy po południu, kolacja bez przypadkowości), zarezerwuj pobyt w Tatrzańskim Wierchu – chętnie podpowiemy też aktualne, sprawdzone adresy na jedzenie poza Krupówkami.</p>
`.trim(),
    category: 'atrakcje',
    date: '2026-06-07',
    image: '/zdjecia/kuchnia/bd1f7fac-12e5-4794-a728-720342c8d4f3.jpg',
    keywords: ['gdzie zjeść Zakopane', 'dobre restauracje Podhale', 'lokalna kuchnia Tatry', 'restauracje Zakopane bez Krupówek']
  },
  {
    id: '3',
    slug: 'romantyczny-weekend-zakopane-plan-premium',
    title: 'Weekend we dwoje w górach. Jak zaplanować relaksujący pobyt pod Tatrami?',
    metaTitle: 'Romantyczny weekend Zakopane: plan relaksu premium',
    metaDescription: 'Plan weekendu we dwoje pod Tatrami: spokojny szlak rano, termy, dobra kolacja i komfortowy rytm. Bez przebodźcowania.',
    excerpt: 'Plan „modern alpine”: krótki szlak rano, termy po południu, kolacja z selekcją, spokojny powrót. Weekend bez przebodźcowania.',
    content: `
<p>Romantyczny wyjazd w góry nie musi oznaczać listy atrakcji do odhaczenia. W wersji premium chodzi o ciszę, dobry sen, spokojne tempo i selekcję miejsc. Ten plan działa, jeśli interesuje Cię <strong>romantyczny weekend w Zakopanem</strong> i szukasz standardu <strong>willa premium Zakopane</strong>.</p>

<h2>Zasada przewodnia: mniej punktów, więcej jakości</h2>
<ul>
  <li><strong>Rano:</strong> krótki szlak bez tłumu.</li>
  <li><strong>Popołudnie:</strong> termy / regeneracja.</li>
  <li><strong>Wieczór:</strong> kolacja w dobrym miejscu + spokojny powrót.</li>
</ul>

<h2>Dzień 1: wejście w rytm</h2>
<h3>Miękki start po przyjeździe</h3>
<p>Zamelduj się, wypij kawę, rozpakuj się. Zamiast centrum wybierz krótki spacer – chodzi o zmianę tempa, nie „wynik”.</p>

<h3>Termy (wybierz styl, nie „największe”)</h3>
<ul>
  <li><strong>Chochołowskie Termy</strong> – duża infrastruktura, łatwa logistyka.</li>
  <li><strong>Termy Bukovina</strong> – bardziej wellness.</li>
  <li><strong>Gorący Potok</strong> – bardziej naturalny klimat gorących źródeł.</li>
</ul>
<p><strong>Tip:</strong> godziny 16:00–19:00 często są przyjemniejsze niż środek dnia.</p>

<h2>Dzień 2: Tatry w porannym świetle</h2>
<p>Najprostsza odpowiedź na „apartamenty dla par Tatry” to… baza, z której da się wyjść wcześnie i wrócić bez pośpiechu.</p>
<ul>
  <li><strong>Dolina Strążyska</strong> + krótko do Siklawicy</li>
  <li><strong>Droga pod Reglami</strong> – odcinki „na własnych zasadach”</li>
  <li><strong>Nosal</strong> wcześnie rano, jeśli lubicie szybkie wejście</li>
</ul>

<h2>Co spakować, żeby weekend był „bez tarcia”</h2>
<ul>
  <li>lekkie buty trekkingowe</li>
  <li>kurtka przeciwdeszczowa</li>
  <li>termos + mała przekąska</li>
</ul>

<p><strong>CTA:</strong> Jeśli chcesz weekendu, który realnie wycisza (a nie tylko „zmienia miejsce”), zarezerwuj pobyt w Tatrzańskim Wierchu. To baza do porannych tras, spokojnych wieczorów i relaksu pod Tatrami.</p>
`.trim(),
    category: 'weekend',
    date: '2026-06-07',
    image: '/zdjecia/Pokoj 5/80492392-021f-4686-b112-592f8493383d.avif',
    keywords: ['romantyczny weekend Zakopane', 'apartamenty dla par Tatry', 'willa premium Zakopane', 'weekend we dwoje w górach']
  },
  {
    id: '4',
    slug: 'zakopane-atrakcje-na-deszcz-przewodnik',
    title: 'Co robić w Zakopanem, gdy pada deszcz? Przewodnik dla wymagających.',
    metaTitle: 'Zakopane na deszcz: muzea, termy i plan premium',
    metaDescription: 'Co robić w Zakopanem w deszcz: Hasior, Willa Oksza, Centrum Edukacji TPN, termy i spokojny plan dnia bez chaosu.',
    excerpt: 'Deszcz w Zakopanem: sztuka Hasiora, Willa Oksza, edukacja TPN, termy i reset w komfortowej bazie. Plan dnia bez tłoku.',
    content: `
<p>Deszcz nie musi „psuć planów” – może je po prostu przeprogramować. Jeśli interesują Cię <strong>Zakopane atrakcje na deszcz</strong> i chcesz wiedzieć <strong>co robić w niepogodę pod Tatrami</strong>, najlepiej zagrać to spokojnie: sztuka, architektura, termy i jakościowy odpoczynek w miejscu noclegu.</p>

<h2>Sztuka i design: Zakopane poza pocztówką</h2>
<h3>Galeria Władysława Hasiora</h3>
<p>Hasior nie jest „miłym muzeum” – i właśnie dlatego działa. To mocne, wizualne doświadczenie dobre między kawą a termami.</p>

<h3>Willa Oksza (Muzeum Tatrzańskie)</h3>
<p>Jeśli lubisz estetykę i chcesz zrozumieć, skąd wziął się styl zakopiański, Oksza jest bardzo dobrym wyborem na deszcz.</p>

<h2>Natura pod dachem: Centrum Edukacji Przyrodniczej TPN</h2>
<p>Nadal jesteś „w Tatrach”, tylko w wersji edukacyjnej. Świetne, jeśli chcesz spędzić czas sensownie bez moknięcia.</p>

<h2>Termy: deszcz, który robi klimat</h2>
<ul>
  <li><strong>Chochołowskie Termy</strong> – wygodna logistyka.</li>
  <li><strong>Termy Bukovina</strong> – bardziej wellness.</li>
  <li><strong>Gorący Potok</strong> – klimat gorących źródeł.</li>
</ul>

<h2>Plan dnia na deszcz (bez przebodźcowania)</h2>
<ul>
  <li><strong>Wariant A:</strong> Hasior → kawa → termy → kolacja.</li>
  <li><strong>Wariant B:</strong> Willa Oksza → Centrum Edukacji TPN → spokojny wieczór.</li>
</ul>

<p><strong>CTA:</strong> Jeśli chcesz Zakopane w wersji spokojnej i wymagającej, zarezerwuj pobyt w Tatrzańskim Wierchu. Pod konkretną pogodę i porę roku podpowiemy najlepszy plan dnia – bez chaosu i przypadkowych wyborów.</p>
`.trim(),
    category: 'atrakcje',
    date: '2026-06-07',
    image: '/zdjecia/widok_z_obiektem_2.avif',
    keywords: ['Zakopane atrakcje na deszcz', 'co robić w niepogodę pod Tatrami', 'Hasior', 'Willa Oksza', 'termalne baseny Zakopane']
  },
  {
    id: '5',
    slug: 'modern-alpine-styl-goralski-nowoczesna-willa-zakopane',
    title: 'Architektura Podhala dawniej i dziś. Czym jest styl „Modern Alpine”?',
    metaTitle: 'Modern Alpine w Zakopanem: tradycja i komfort',
    metaDescription: 'Czym jest Modern Alpine? Jak łączy drewno, rzemiosło i minimalizm. Podhale bez cepelii: nowoczesna willa, noclegi z klimatem.',
    excerpt: 'Modern Alpine: drewno i rzemiosło w czystej formie, światło, spokój i detale jako akcent. Podhale bez udawania „skansenu”.',
    content: `
<p>Podhale ma silny kod wizualny: drewno, rytm desek, rzemiosło, motyw. Ale współczesny komfort premium potrzebuje też światła, przestrzeni i prostoty. Styl <strong>Modern Alpine</strong> bierze to, co najlepsze z tradycji i przekłada na nowoczesny język – bez cepelii.</p>

<h2>Styl zakopiański: co było naprawdę ważne?</h2>
<ul>
  <li><strong>rzemiosło</strong> – detal jako jakość, nie dekoracja</li>
  <li><strong>materiał</strong> – drewno jako klimat i funkcja</li>
  <li><strong>proporcja</strong> – dom ma „stać” w krajobrazie sensownie</li>
</ul>

<h2>Modern Alpine: definicja w praktyce</h2>
<h3>Drewno i kamień, ale w czystej formie</h3>
<p>Jasne drewno, matowe wykończenia, naturalne faktury. Bez ciężkości i nadmiaru.</p>

<h3>Ornament jako akcent, nie tło</h3>
<p>Parzenica, rozeta, wzór – tak, ale w tkaninie, grafice albo pojedynczym detalu. Wystarczy sugestia.</p>

<h3>Światło i „oddech”</h3>
<p>Przeszklenia, spokojna paleta, miękkie tekstylia. Krajobraz jest najlepszą dekoracją.</p>

<h2>Jak rozpoznać dobrą nowoczesną willę w Zakopanem?</h2>
<ul>
  <li>materiały: prawdziwe, nie „udawane”</li>
  <li>światło: wnętrze oddycha</li>
  <li>detal: spójny, nie przypadkowy</li>
  <li>cisza i prywatność: premium często zaczyna się od akustyki</li>
</ul>

<p><strong>CTA:</strong> Jeśli szukasz <strong>noclegów z klimatem w Zakopanem</strong> w nowoczesnym standardzie, zarezerwuj pobyt w Tatrzańskim Wierchu. Modern Alpine ma sens wtedy, gdy wspiera odpoczynek – i dokładnie tak go projektujemy.</p>
`.trim(),
    category: 'noclegi',
    date: '2026-06-07',
    image: '/zdjecia/Pokoj 2/924780b6-f861-4c60-b70e-24ee6244a6a0.avif',
    keywords: ['nowoczesna willa Zakopane', 'styl góralski', 'noclegi z klimatem Zakopane', 'Modern Alpine', 'architektura Podhala']
  },
  {
    id: '6',
    slug: 'zima-w-zakopanem-bez-nart-atrakcje',
    title: 'Zima w Zakopanem dla nie-narciarzy. Atrakcje, które pozwolą poczuć magię Tatr.',
    metaTitle: 'Zima w Zakopanem bez nart: termy, kulig, doliny',
    metaDescription: 'Zimowe atrakcje w Zakopanem bez nart: spacery dolinami, kulig z klimatem, gorące źródła, sztuka i rzemiosło. Plan na ferie.',
    excerpt: 'Zima bez nart: doliny i reglami, kulig w dobrej formule, termy i Zakopane pod dachem. Plan na ferie dla wymagających.',
    content: `
<p>Nie musisz jeździć na nartach, żeby zima pod Tatrami miała sens. Wystarczy dobrze ustawić plan: mniej sportu, więcej doświadczeń – śnieg w dolinach, ciepła woda, dobre jedzenie, światło wieczorem. Jeśli interesuje Cię <strong>zima w Zakopanem bez nart</strong>, poniżej masz konkret.</p>

<h2>Zimowe doliny: spacer, który naprawdę resetuje</h2>
<ul>
  <li><strong>Dolina Strążyska</strong> – krótko, dobrze na poranek.</li>
  <li><strong>Droga pod Reglami</strong> – długi spacer „na własnych zasadach”.</li>
  <li><strong>Dolina Kościeliska / Chochołowska</strong> – zależnie od warunków.</li>
</ul>

<h2>Kulig: gdy chcesz zimy z klimatem, ale bez kiczu</h2>
<p>Dobry kulig to logistyka i skala. Wybieraj mniejsze grupy i terminy poza szczytem – wtedy to naprawdę działa.</p>
<ul>
  <li>pytaj o trasę i czas przejazdu</li>
  <li>unikaj „hurtowych” imprez</li>
  <li>szukaj opcji z ogniskiem w spokojnym miejscu</li>
</ul>

<h2>Gorące źródła: zimowa przyjemność bez dyskusji</h2>
<ul>
  <li><strong>Chochołowskie Termy</strong></li>
  <li><strong>Termy Bukovina</strong></li>
  <li><strong>Gorący Potok</strong></li>
</ul>

<h2>Sztuka i rzemiosło: Zakopane z kontekstem</h2>
<p>Gdy chcesz zostać „pod dachem”, wybierz miejsca, które dają coś więcej niż szybkie zdjęcie: Hasior, Willa Oksza, lokalne pracownie.</p>

<h2>Plan „zima bez nart” na 3 dni</h2>
<ul>
  <li><strong>Dzień 1:</strong> przyjazd → termy → kolacja.</li>
  <li><strong>Dzień 2:</strong> poranny spacer → sztuka / design → spokojny wieczór.</li>
  <li><strong>Dzień 3:</strong> dłuższa dolina → kulig wieczorem (jeśli warunki pozwalają).</li>
</ul>

<p><strong>CTA:</strong> Jeśli planujesz ferie i szukasz jakościowego odpoczynku pod Tatrami, zarezerwuj pobyt w Tatrzańskim Wierchu. Podpowiemy zimowe scenariusze dopasowane do pogody i Twojego tempa – również bez nart.</p>
`.trim(),
    category: 'atrakcje',
    date: '2026-06-07',
    image: '/zdjecia/Pokoj 1/7b5c034f-9152-40b3-8c93-6b3a50ee027f.avif',
    keywords: ['zima w Zakopanem bez nart', 'zimowe atrakcje Tatry', 'gdzie na ferie w góry', 'kulig Zakopane', 'gorące źródła Podhale']
  }
] satisfies BlogPost[];
