const COUNTRY_FLAGS = {
  "Mexico": "🇲🇽", "Canada": "🇨🇦", "United States": "🇺🇸", "USA": "🇺🇸",
  "Panama": "🇵🇦", "Curaçao": "🇨🇼", "Curacao": "🇨🇼", "Haiti": "🇭🇹",
  "Argentina": "🇦🇷", "Brazil": "🇧🇷", "Ecuador": "🇪🇨", "Uruguay": "🇺🇾",
  "Colombia": "🇨🇴", "Paraguay": "🇵🇾",
  "Japan": "🇯🇵", "Iran": "🇮🇷", "South Korea": "🇰🇷", "Australia": "🇦🇺",
  "Uzbekistan": "🇺🇿", "Jordan": "🇯🇴", "Qatar": "🇶🇦", "Saudi Arabia": "🇸🇦", "Iraq": "🇮🇶",
  "Morocco": "🇲🇦", "Tunisia": "🇹🇳", "Egypt": "🇪🇬", "Algeria": "🇩🇿",
  "Ghana": "🇬🇭", "Cape Verde": "🇨🇻", "Senegal": "🇸🇳", "South Africa": "🇿🇦",
  "Ivory Coast": "🇨🇮", "Côte d'Ivoire": "🇨🇮", "DR Congo": "🇨🇩",
  "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "France": "🇫🇷", "Croatia": "🇭🇷", "Portugal": "🇵🇹",
  "Norway": "🇳🇴", "Germany": "🇩🇪", "Netherlands": "🇳🇱", "Switzerland": "🇨🇭",
  "Scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "Spain": "🇪🇸", "Austria": "🇦🇹", "Belgium": "🇧🇪",
  "Bosnia and Herzegovina": "🇧🇦", "Sweden": "🇸🇪", "Turkey": "🇹🇷",
  "Czech Republic": "🇨🇿", "New Zealand": "🇳🇿",
  "Italy": "🇮🇹", "West Germany": "🇩🇪", "Chile": "🇨🇱", "Peru": "🇵🇪",
  "Poland": "🇵🇱", "Yugoslavia": "🇷🇸", "Hungary": "🇭🇺", "Czechoslovakia": "🇨🇿",
  "Austria (historical)": "🇦🇹", "Soviet Union": "🇷🇺", "Russia": "🇷🇺",
  "Cameroon": "🇨🇲", "Nigeria": "🇳🇬", "Costa Rica": "🇨🇷", "South Africa (host)": "🇿🇦",
  "China": "🇨🇳", "United Arab Emirates": "🇦🇪", "USA (historical)": "🇺🇸",
};

function flagFor(name) {
  return COUNTRY_FLAGS[name] || "🏳️";
}
