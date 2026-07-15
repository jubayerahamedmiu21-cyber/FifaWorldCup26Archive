const COUNTRY_CODES = {
  "Mexico": "mx", "Canada": "ca", "United States": "us", "USA": "us",
  "Panama": "pa", "Curaçao": "cw", "Curacao": "cw", "Haiti": "ht",
  "Argentina": "ar", "Brazil": "br", "Ecuador": "ec", "Uruguay": "uy",
  "Colombia": "co", "Paraguay": "py",
  "Japan": "jp", "Iran": "ir", "South Korea": "kr", "Australia": "au",
  "Uzbekistan": "uz", "Jordan": "jo", "Qatar": "qa", "Saudi Arabia": "sa", "Iraq": "iq",
  "Morocco": "ma", "Tunisia": "tn", "Egypt": "eg", "Algeria": "dz",
  "Ghana": "gh", "Cape Verde": "cv", "Senegal": "sn", "South Africa": "za",
  "Ivory Coast": "ci", "Côte d'Ivoire": "ci", "DR Congo": "cd",
  "England": "gb-eng", "France": "fr", "Croatia": "hr", "Portugal": "pt",
  "Norway": "no", "Germany": "de", "Netherlands": "nl", "Switzerland": "ch",
  "Scotland": "gb-sct", "Spain": "es", "Austria": "at", "Belgium": "be",
  "Bosnia and Herzegovina": "ba", "Sweden": "se", "Turkey": "tr",
  "Czech Republic": "cz", "New Zealand": "nz",
  "Italy": "it", "West Germany": "de", "Chile": "cl", "Peru": "pe",
  "Poland": "pl", "Yugoslavia": "rs", "Hungary": "hu", "Czechoslovakia": "cz",
  "Soviet Union": "ru", "Russia": "ru",
  "Cameroon": "cm", "Nigeria": "ng", "Costa Rica": "cr",
  "China": "cn", "United Arab Emirates": "ae",
};

function flagFor(name) {
  const code = COUNTRY_CODES[name];
  if (!code) {
    return `<span class="flag-fallback" title="${name}">🏳️</span>`;
  }
  return `<img class="flag-icon" src="https://flagcdn.com/24x18/${code}.png" srcset="https://flagcdn.com/48x36/${code}.png 2x" width="24" height="18" alt="${name} flag" loading="lazy" onerror="this.style.display='none'" />`;
}
