// =======================
// LOCAL STORAGE FUNCTIONS
// =======================

function saveState() {
  const state = {
    fromCurrency,
    toCurrency,
    amount: amountFromInput.value
  };
  localStorage.setItem("currencyState", JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem("currencyState");
  if (!saved) return;

  const state = JSON.parse(saved);

  if (state.fromCurrency && currencyFlags[state.fromCurrency]) {
      fromCurrency = state.fromCurrency;
      document.getElementById('fromFlag').src = `https://flagcdn.com/w40/${currencyFlags[fromCurrency]}.png`;
      document.getElementById('fromCode').textContent = fromCurrency;
  }

  if (state.toCurrency && currencyFlags[state.toCurrency]) {
      toCurrency = state.toCurrency;
      document.getElementById('toFlag').src = `https://flagcdn.com/w40/${currencyFlags[toCurrency]}.png`;
      document.getElementById('toCode').textContent = toCurrency;
  }

  if (state.amount) {
      amountFromInput.value = state.amount;
  }
}



// =======================
// ORIGINAL CODE BELOW
// =======================


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
  AED: 'ae', AFN: 'af', ALL: 'al', AMD: 'am', ANG: 'cw', AOA: 'ao', ARS: 'ar', AWG: 'aw',
  AZN: 'az', BAM: 'ba', BBD: 'bb', BDT: 'bd', BGN: 'bg', BHD: 'bh', BIF: 'bi', BMD: 'bm', 
  BND: 'bn', BOB: 'bo', BRL: 'br', BSD: 'bs', BTN: 'bt', BWP: 'bw', BYN: 'by', BZD: 'bz',
  CLP: 'cl', COP: 'co', CRC: 'cr', CUP: 'cu', CVE: 'cv', CZK: 'cz', DJF: 'dj', DKK: 'dk',
  DOP: 'do', DZD: 'dz', EGP: 'eg', ERN: 'er', ETB: 'et', FJD: 'fj', FKP: 'fk', GEL: 'ge',
  GHS: 'gh', GIP: 'gi', GMD: 'gm', GNF: 'gn', GTQ: 'gt', GYD: 'gy', HKD: 'hk', HNL: 'hn',
  HRK: 'hr', HTG: 'ht', HUF: 'hu', IDR: 'id', ISK: 'is', JMD: 'jm', JOD: 'jo', KHR: 'kh',
  KRW: 'kr', KWD: 'kw', KYD: 'ky', LAK: 'la', LBP: 'lb', LKR: 'lk', LRD: 'lr', LSL: 'ls',
  LYD: 'ly', MAD: 'ma', MDL: 'md', MGA: 'mg', MKD: 'mk', MMK: 'mm', MNT: 'mn', MOP: 'mo',
  MRU: 'mr', MUR: 'mu', MVR: 'mv', MWK: 'mw', MXN: 'mx', MYR: 'my', MZN: 'mz', NAD: 'na',
  NGN: 'ng', NIO: 'ni', NOK: 'no', NPR: 'np', NZD: 'nz', OMR: 'om', PAB: 'pa', PEN: 'pe',
  PGK: 'pg', PHP: 'ph', PKR: 'pk', PLN: 'pl', PYG: 'py', QAR: 'qa', RON: 'ro', RSD: 'rs',
  RUB: 'ru', RWF: 'rw', SAR: 'sa', SBD: 'sb', SCR: 'sc', SDG: 'sd', SEK: 'se', SHP: 'sh',
  SLE: 'sl', SOS: 'so', SRD: 'sr', THB: 'th', TJS: 'tj', TMT: 'tm', TND: 'tn', TOP: 'to',
  TRY: 'tr', TTD: 'tt', TWD: 'tw', TZS: 'tz', UAH: 'ua', UGX: 'ug', UYU: 'uy', VND: 'vn',
  VUV: 'vu', WST: 'ws', XAF: 'cm', XCD: 'ag', YER: 'ye', ZAR: 'za', ZMW: 'zm'
};


// Currency names — partial expanded
const currencyNames = {
  USD: 'US Dollar', EUR: 'Euro', GBP: 'British Pound', JPY: 'Japanese Yen',
  AUD: 'Australian Dollar', CAD: 'Canadian Dollar', CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan', INR: 'Indian Rupee', KGS: 'Kyrgyzstani Som',
  KZT: 'Kazakhstani Tenge', UZS: 'Uzbekistani Som', SGD: 'Singapore Dollar'
};


// Fallback exchange rates (USD base)
const fallbackRates = {
  USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.50, AUD: 1.52, CAD: 1.36, CHF: 0.88,
  CNY: 7.24, INR: 83.12, KGS: 87.41, KZT: 523.28, UZS: 12042.18, SGD: 1.36
};


let rates = {...fallbackRates};
let fromCurrency = 'USD';
let toCurrency = 'SGD';
let currentPickerType = 'from';


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

  saveState(); // <── добавлено

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

  saveState(); // <── добавлено
  
  convertCurrency();
}



// Event Listeners
swapBtn.addEventListener('click', swapCurrencies);

amountFromInput.addEventListener('input', () => {
  convertCurrency();
  saveState(); // <── добавлено
});

// Close modal when clicking outside
currencyModal.addEventListener('click', (e) => {
  if (e.target === currencyModal) {
    closeCurrencyPicker();
  }
});



// Initialize
window.addEventListener('load', () => {
  loadState();    // <── добавлено
  fetchRates();
  convertCurrency();
});



// ==============================
// ТВОЙ ОРИГИНАЛЬНЫЙ DROPDOWN КОД
// ==============================

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
if (selected) {
  selected.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
    search.value = "";
    renderList();
  });
}

// Поиск
if (search) {
  search.addEventListener("input", () => {
    renderList(search.value);
  });
}

// Закрытие кликом вне
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    if (menu) menu.style.display = "none";
  }
});


