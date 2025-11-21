// Currency flags mapping (country codes for flagcdn.com) — partial list
const currencyFlags = {
  USD: 'us',
  EUR: 'eu',
  GBP: 'gb',
  JPY: 'jp',
  AUD: 'au',
  CAD: 'ca',
  CHF: 'ch',
  CNY: 'cn',
  INR: 'in',
  KGS: 'kg',
  KZT: 'kz',
  UZS: 'uz',
  SGD: 'sg',

  // Additional currencies:
  AED: 'ae',     // UAE Dirham — United Arab Emirates
  AFN: 'af',     // Afghan Afghani — Afghanistan
  ALL: 'al',     // Albanian Lek — Albania
  AMD: 'am',     // Armenian Dram — Armenia
  ANG: 'cw',     // Netherlands Antillean Guilder – Curaçao (flag: cw)
  AOA: 'ao',     // Angolan Kwanza — Angola
  ARS: 'ar',     // Argentine Peso — Argentina
  AWG: 'aw',     // Aruban Florin — Aruba
  AZN: 'az',     // Azerbaijani Manat — Azerbaijan
  BAM: 'ba',     // Bosnia and Herzegovina Mark — Bosnia & Herzegovina
  BBD: 'bb',     // Barbados Dollar — Barbados
  BDT: 'bd',     // Bangladeshi Taka — Bangladesh
  BGN: 'bg',     // Bulgarian Lev — Bulgaria
  BHD: 'bh',     // Bahraini Dinar — Bahrain
  BIF: 'bi',     // Burundian Franc — Burundi
  BMD: 'bm',     // Bermudian Dollar — Bermuda
  BND: 'bn',     // Brunei Dollar — Brunei
  BOB: 'bo',     // Bolivian Boliviano — Bolivia
  BRL: 'br',     // Brazilian Real — Brazil
  BSD: 'bs',     // Bahamian Dollar — Bahamas
  BTN: 'bt',     // Bhutanese Ngultrum — Bhutan
  BWP: 'bw',     // Botswana Pula — Botswana
  BYN: 'by',     // Belarusian Ruble — Belarus
  BZD: 'bz',     // Belize Dollar — Belize
  CLP: 'cl',     // Chilean Peso — Chile
  COP: 'co',     // Colombian Peso — Colombia
  CRC: 'cr',     // Costa Rican Colón — Costa Rica
  CUP: 'cu',     // Cuban Peso — Cuba
  CVE: 'cv',     // Cape Verdean Escudo — Cape Verde
  CZK: 'cz',     // Czech Koruna — Czech Republic
  DJF: 'dj',     // Djiboutian Franc — Djibouti
  DKK: 'dk',     // Danish Krone — Denmark
  DOP: 'do',     // Dominican Peso — Dominican Republic
  DZD: 'dz',     // Algerian Dinar — Algeria
  EGP: 'eg',     // Egyptian Pound — Egypt
  ERN: 'er',     // Eritrean Nakfa — Eritrea
  ETB: 'et',     // Ethiopian Birr — Ethiopia
  FJD: 'fj',     // Fiji Dollar — Fiji
  FKP: 'fk',     // Falkland Islands Pound — Falkland Islands
  GEL: 'ge',     // Georgian Lari — Georgia
  GHS: 'gh',     // Ghanaian Cedi — Ghana
  GIP: 'gi',     // Gibraltar Pound — Gibraltar
  GMD: 'gm',     // Gambian Dalasi — The Gambia
  GNF: 'gn',     // Guinean Franc — Guinea
  GTQ: 'gt',     // Guatemalan Quetzal — Guatemala
  GYD: 'gy',     // Guyanese Dollar — Guyana
  HKD: 'hk',     // Hong Kong Dollar — Hong Kong
  HNL: 'hn',     // Honduran Lempira — Honduras
  HRK: 'hr',     // Croatian Kuna — Croatia
  HTG: 'ht',     // Haitian Gourde — Haiti
  HUF: 'hu',     // Hungarian Forint — Hungary
  IDR: 'id',     // Indonesian Rupiah — Indonesia
  ISK: 'is',     // Icelandic Króna — Iceland
  JMD: 'jm',     // Jamaican Dollar — Jamaica
  JOD: 'jo',     // Jordanian Dinar — Jordan
  KHR: 'kh',     // Cambodian Riel — Cambodia
  KRW: 'kr',     // South Korean Won — South Korea
  KWD: 'kw',     // Kuwaiti Dinar — Kuwait
  KYD: 'ky',     // Cayman Islands Dollar — Cayman Islands
  LAK: 'la',     // Lao Kip — Laos
  LBP: 'lb',     // Lebanese Pound — Lebanon
  LKR: 'lk',     // Sri Lankan Rupee — Sri Lanka
  LRD: 'lr',     // Liberian Dollar — Liberia
  LSL: 'ls',     // Lesotho Loti — Lesotho
  LYD: 'ly',     // Libyan Dinar — Libya
  MAD: 'ma',     // Moroccan Dirham — Morocco
  MDL: 'md',     // Moldovan Leu — Moldova
  MGA: 'mg',     // Malagasy Ariary — Madagascar
  MKD: 'mk',     // Macedonian Denar — North Macedonia
  MMK: 'mm',     // Burmese Kyat — Myanmar
  MNT: 'mn',     // Mongolian Tögrög — Mongolia
  MOP: 'mo',     // Macanese Pataca — Macau
  MRU: 'mr',     // Mauritanian Ouguiya — Mauritania
  MUR: 'mu',     // Mauritian Rupee — Mauritius
  MVR: 'mv',     // Maldivian Rufiyaa — Maldives
  MWK: 'mw',     // Malawian Kwacha — Malawi
  MXN: 'mx',     // Mexican Peso — Mexico
  MYR: 'my',     // Malaysian Ringgit — Malaysia
  MZN: 'mz',     // Mozambican Metical — Mozambique
  NAD: 'na',     // Namibian Dollar — Namibia
  NGN: 'ng',     // Nigerian Naira — Nigeria
  NIO: 'ni',     // Nicaraguan Córdoba — Nicaragua
  NOK: 'no',     // Norwegian Krone — Norway
  NPR: 'np',     // Nepalese Rupee — Nepal
  NZD: 'nz',     // New Zealand Dollar — New Zealand
  OMR: 'om',     // Omani Rial — Oman
  PAB: 'pa',     // Panamanian Balboa — Panama
  PEN: 'pe',     // Peruvian Sol — Peru
  PGK: 'pg',     // Papua New Guinean Kina — Papua New Guinea
  PHP: 'ph',     // Philippine Peso — Philippines
  PKR: 'pk',     // Pakistani Rupee — Pakistan
  PLN: 'pl',     // Polish Złoty — Poland
  PYG: 'py',     // Paraguayan Guaraní — Paraguay
  QAR: 'qa',     // Qatari Riyal — Qatar
  RON: 'ro',     // Romanian Leu — Romania
  RSD: 'rs',     // Serbian Dinar — Serbia
  RUB: 'ru',     // Russian Ruble — Russia
  RWF: 'rw',     // Rwandan Franc — Rwanda
  SAR: 'sa',     // Saudi Riyal — Saudi Arabia
  SBD: 'sb',     // Solomon Islands Dollar — Solomon Islands
  SCR: 'sc',     // Seychellois Rupee — Seychelles
  SDG: 'sd',     // Sudanese Pound — Sudan
  SEK: 'se',     // Swedish Krona — Sweden
  SHP: 'sh',     // Saint Helena Pound — Saint Helena
  SLE: 'sl',     // Sierra Leonean Leone — Sierra Leone
  SOS: 'so',     // Somali Shilling — Somalia
  SRD: 'sr',     // Surinamese Dollar — Suriname
  THB: 'th',     // Thai Baht — Thailand
  TJS: 'tj',     // Tajikistani Somoni — Tajikistan
  TMT: 'tm',     // Turkmenistan Manat — Turkmenistan
  TND: 'tn',     // Tunisian Dinar — Tunisia
  TOP: 'to',     // Tongan Paʻanga — Tonga
  TRY: 'tr',     // Turkish Lira — Turkey
  TTD: 'tt',     // Trinidad and Tobago Dollar — Trinidad & Tobago
  TWD: 'tw',     // Taiwan New Dollar — Taiwan
  TZS: 'tz',     // Tanzanian Shilling — Tanzania
  UAH: 'ua',     // Ukrainian Hryvnia — Ukraine
  UGX: 'ug',     // Ugandan Shilling — Uganda
  UYU: 'uy',     // Uruguayan Peso — Uruguay
  VND: 'vn',     // Vietnamese Đồng — Vietnam
  VUV: 'vu',     // Vanuatu Vatu — Vanuatu
  WST: 'ws',     // Samoan Tālā — Samoa
  XAF: 'cm',     // Central African CFA Franc — CEMAC (Cameroon flag code “cm”)
  XCD: 'ag',     // East Caribbean Dollar — Organisation of Eastern Caribbean States (use flag of one country, e.g. Antigua “ag”)
  YER: 'ye',     // Yemeni Rial — Yemen
  ZAR: 'za',     // South African Rand — South Africa
  ZMW: 'zm',     // Zambian Kwacha — Zambia
  // plus others ...
};

// Currency names — partial expanded
const currencyNames = {
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  JPY: 'Japanese Yen',
  AUD: 'Australian Dollar',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  INR: 'Indian Rupee',
  KGS: 'Kyrgyzstani Som',
  KZT: 'Kazakhstani Tenge',
  UZS: 'Uzbekistani Som',
  SGD: 'Singapore Dollar',

  AED: 'UAE Dirham',
  AFN: 'Afghan Afghani',
  ALL: 'Albanian Lek',
  AMD: 'Armenian Dram',
  ANG: 'Netherlands Antillean Guilder',
  AOA: 'Angolan Kwanza',
  ARS: 'Argentine Peso',
  AWG: 'Aruban Florin',
  AZN: 'Azerbaijani Manat',
  BAM: 'Bosnia-Herzegovina Convertible Mark',
  BBD: 'Barbados Dollar',
  BDT: 'Bangladeshi Taka',
  BGN: 'Bulgarian Lev',
  BHD: 'Bahraini Dinar',
  BIF: 'Burundian Franc',
  BMD: 'Bermudian Dollar',
  BND: 'Brunei Dollar',
  BOB: 'Bolivian Boliviano',
  BRL: 'Brazilian Real',
  BSD: 'Bahamian Dollar',
  BTN: 'Bhutanese Ngultrum',
  BWP: 'Botswana Pula',
  BYN: 'Belarusian Ruble',
  BZD: 'Belize Dollar',
  CLP: 'Chilean Peso',
  COP: 'Colombian Peso',
  CRC: 'Costa Rican Colón',
  CUP: 'Cuban Peso',
  CVE: 'Cape Verdean Escudo',
  CZK: 'Czech Koruna',
  DJF: 'Djiboutian Franc',
  DKK: 'Danish Krone',
  DOP: 'Dominican Peso',
  DZD: 'Algerian Dinar',
  EGP: 'Egyptian Pound',
  ERN: 'Eritrean Nakfa',
  ETB: 'Ethiopian Birr',
  FJD: 'Fiji Dollar',
  FKP: 'Falkland Islands Pound',
  GEL: 'Georgian Lari',
  GHS: 'Ghanaian Cedi',
  GIP: 'Gibraltar Pound',
  GMD: 'Gambian Dalasi',
  GNF: 'Guinean Franc',
  GTQ: 'Guatemalan Quetzal',
  GYD: 'Guyanese Dollar',
  HKD: 'Hong Kong Dollar',
  HNL: 'Honduran Lempira',
  HRK: 'Croatian Kuna',
  HTG: 'Haitian Gourde',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ISK: 'Icelandic Króna',
  JMD: 'Jamaican Dollar',
  JOD: 'Jordanian Dinar',
  KHR: 'Cambodian Riel',
  KRW: 'South Korean Won',
  KWD: 'Kuwaiti Dinar',
  KYD: 'Cayman Islands Dollar',
  LAK: 'Lao Kip',
  LBP: 'Lebanese Pound',
  LKR: 'Sri Lankan Rupee',
  LRD: 'Liberian Dollar',
  LSL: 'Lesotho Loti',
  LYD: 'Libyan Dinar',
  MAD: 'Moroccan Dirham',
  MDL: 'Moldovan Leu',
  MGA: 'Malagasy Ariary',
  MKD: 'Macedonian Denar',
  MMK: 'Myanma Kyat',
  MNT: 'Mongolian Tögrög',
  MOP: 'Macanese Pataca',
  MRU: 'Mauritanian Ouguiya',
  MUR: 'Mauritian Rupee',
  MVR: 'Maldivian Rufiyaa',
  MWK: 'Malawian Kwacha',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  MZN: 'Mozambican Metical',
  NAD: 'Namibian Dollar',
  NGN: 'Nigerian Naira',
  NIO: 'Nicaraguan Córdoba',
  NOK: 'Norwegian Krone',
  NPR: 'Nepalese Rupee',
  NZD: 'New Zealand Dollar',
  OMR: 'Omani Rial',
  PAB: 'Panamanian Balboa',
  PEN: 'Peruvian Sol',
  PGK: 'Papua New Guinean Kina',
  PHP: 'Philippine Peso',
  PKR: 'Pakistani Rupee',
  PLN: 'Polish Złoty',
  PYG: 'Paraguayan Guaraní',
  QAR: 'Qatari Riyal',
  RON: 'Romanian Leu',
  RSD: 'Serbian Dinar',
  RUB: 'Russian Ruble',
  RWF: 'Rwandan Franc',
  SAR: 'Saudi Riyal',
  SBD: 'Solomon Islands Dollar',
  SCR: 'Seychellois Rupee',
  SDG: 'Sudanese Pound',
  SEK: 'Swedish Krona',
  SHP: 'Saint Helena Pound',
  SLE: 'Sierra Leonean Leone',
  SOS: 'Somali Shilling',
  SRD: 'Surinamese Dollar',
  THB: 'Thai Baht',
  TJS: 'Tajikistani Somoni',
  TMT: 'Turkmenistan Manat',
  TND: 'Tunisian Dinar',
  TOP: 'Tongan Paʻanga',
  TRY: 'Turkish Lira',
  TTD: 'Trinidad & Tobago Dollar',
  TWD: 'Taiwan New Dollar',
  TZS: 'Tanzanian Shilling',
  UAH: 'Ukrainian Hryvnia',
  UGX: 'Ugandan Shilling',
  UYU: 'Uruguayan Peso',
  VND: 'Vietnamese Đồng',
  VUV: 'Vanuatu Vatu',
  WST: 'Samoan Tālā',
  XAF: 'Central African CFA Franc',
  XCD: 'East Caribbean Dollar',
  YER: 'Yemeni Rial',
  ZAR: 'South African Rand',
  ZMW: 'Zambian Kwacha',
  // ... and so on for all supported currencies
};

// Fallback exchange rates (USD base) — you’d have to provide fallback rates for all, or fetch dynamically
const fallbackRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 149.50,
  AUD: 1.52,
  CAD: 1.36,
  CHF: 0.88,
  CNY: 7.24,
  INR: 83.12,
  KGS: 87.41,
  KZT: 523.28,
  UZS: 12042.18,
  SGD: 1.36,

  // Example fallbacks for others (you’ll need to define or fetch real ones):
  AED: 3.67,
  AFN: 91.23,
  ALL: 111.45,
  AMD: 385.5,
  ARS: 350.0,
  // … etc for all supported currencies
};


let rates = {...fallbackRates};
let fromCurrency = 'USD';
let toCurrency = 'SGD';
let currentPickerType = 'from'; // Track which picker is open

// DOM Elements
const amountFromInput = document.getElementById('amountFrom');
const amountToInput = document.getElementById('amountTo');
const statusDiv = document.getElementById('status');
const swapBtn = document.getElementById('swapBtn');
const rateDisplay = document.getElementById('rateDisplay');
const currencyModal = document.getElementById('currencyModal');
const currencyList = document.getElementById('currencyList');

// Set status message
function setStatus(message, type = 'normal') {
  statusDiv.textContent = message;
  statusDiv.className = 'status ' + type;
}

// Fetch live exchange rates
async function fetchRates() {
  try {
      setStatus('Loading live rates...', 'normal');
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      
      if (data.rates) {
          rates = {...data.rates, SGD: data.rates.SGD || 1.36};
          setStatus('✓ Live rates loaded', 'success');
          setTimeout(() => setStatus('', 'normal'), 3000);
          convertCurrency();
      }
  } catch (error) {
      rates = {...fallbackRates};
      setStatus('Using offline rates', 'normal');
      setTimeout(() => setStatus('', 'normal'), 3000);
      convertCurrency();
  }
}

// Convert currency
function convertCurrency() {
  const amount = parseFloat(amountFromInput.value);
  
  if (isNaN(amount) || amount < 0) {
      amountToInput.value = '0.00';
      updateRateDisplay();
      return;
  }

  const fromRate = rates[fromCurrency];
  const toRate = rates[toCurrency];

  if (!fromRate || !toRate) {
      setStatus('Currency not available', 'error');
      return;
  }

  const amountInUSD = amount / fromRate;
  const result = amountInUSD * toRate;

  amountToInput.value = result.toFixed(2);
  updateRateDisplay();
}

// Update rate display
function updateRateDisplay() {
  const fromRate = rates[fromCurrency];
  const toRate = rates[toCurrency];
  const rate = (toRate / fromRate).toFixed(2);
  rateDisplay.textContent = `1 ${fromCurrency} = ${rate} ${toCurrency}`;
}

// Show currency picker
function showCurrencyPicker(type) {
  currentPickerType = type;
  
  // Build currency list
  currencyList.innerHTML = '';
  const currencies = Object.keys(currencyFlags);
  
  currencies.forEach(currency => {
    const item = document.createElement('div');
    item.className = 'currency-item';
    if ((type === 'from' && currency === fromCurrency) || 
        (type === 'to' && currency === toCurrency)) {
      item.classList.add('selected');
    }
    
    item.innerHTML = `
      <img class="flag" src="https://flagcdn.com/w40/${currencyFlags[currency]}.png" alt="${currency}">
      <div class="currency-info">
        <div class="currency-code">${currency}</div>
        <div class="currency-name">${currencyNames[currency]}</div>
      </div>
      ${((type === 'from' && currency === fromCurrency) || 
         (type === 'to' && currency === toCurrency)) ? '<span class="checkmark">✓</span>' : ''}
    `;
    
    item.addEventListener('click', () => selectCurrency(currency));
    currencyList.appendChild(item);
  });
  
  currencyModal.classList.add('show');
}

// Select currency from picker
function selectCurrency(currency) {
  if (currentPickerType === 'from') {
    fromCurrency = currency;
    document.getElementById('fromFlag').src = `https://flagcdn.com/w40/${currencyFlags[currency]}.png`;
    document.getElementById('fromFlag').alt = currency;
    document.getElementById('fromCode').textContent = currency;
  } else {
    toCurrency = currency;
    document.getElementById('toFlag').src = `https://flagcdn.com/w40/${currencyFlags[currency]}.png`;
    document.getElementById('toFlag').alt = currency;
    document.getElementById('toCode').textContent = currency;
  }
  
  closeCurrencyPicker();
  convertCurrency();
}

// Close currency picker
function closeCurrencyPicker() {
  currencyModal.classList.remove('show');
}

// Swap currencies
function swapCurrencies() {
  const tempCurrency = fromCurrency;
  const tempAmount = amountFromInput.value;
  
  fromCurrency = toCurrency;
  toCurrency = tempCurrency;
  
  document.getElementById('fromFlag').src = `https://flagcdn.com/w40/${currencyFlags[fromCurrency]}.png`;
  document.getElementById('fromFlag').alt = fromCurrency;
  document.getElementById('fromCode').textContent = fromCurrency;
  document.getElementById('toFlag').src = `https://flagcdn.com/w40/${currencyFlags[toCurrency]}.png`;
  document.getElementById('toFlag').alt = toCurrency;
  document.getElementById('toCode').textContent = toCurrency;
  
  if (amountToInput.value) {
      amountFromInput.value = amountToInput.value;
  }
  
  convertCurrency();
}

// Event Listeners
swapBtn.addEventListener('click', swapCurrencies);
amountFromInput.addEventListener('input', convertCurrency);

// Close modal when clicking outside
currencyModal.addEventListener('click', (e) => {
  if (e.target === currencyModal) {
    closeCurrencyPicker();
  }
});

// Initialize
window.addEventListener('load', () => {
  fetchRates();
  convertCurrency();
});

// Массив валют или стран
const items = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CNY", "INR", "CHF"];

const selected = document.getElementById("selectedCurrency");
const menu = document.getElementById("dropdownMenu");
const list = document.getElementById("dropdownList");
const search = document.getElementById("dropdownSearch");

// Рендер списка
function renderList(filter = "") {
  list.innerHTML = "";

  items
    .filter(item => item.toLowerCase().includes(filter.toLowerCase()))
    .forEach(item => {
      const div = document.createElement("div");
      div.className = "dropdown-item";
      div.textContent = item;

      div.addEventListener("click", () => {
        selected.textContent = item;
        menu.style.display = "none";
      });

      list.appendChild(div);
    });
}

// Открыть меню
selected.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
  search.value = "";
  renderList();
});

// Поиск
search.addEventListener("input", () => {
  renderList(search.value);
});

// Закрытие кликом вне
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    menu.style.display = "none";
  }
});
