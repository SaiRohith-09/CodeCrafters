let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);

  const toggleBtn = document.getElementById('langToggle');
  toggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'te' : 'en';
    applyLanguage(currentLang);
  });
});

function applyLanguage(lang) {
  const elements = document.querySelectorAll('h1, h2, h3, h4, h5, p, span, li, blockquote, button');

  elements.forEach(el => {
    // Save original text once
    if (!el.getAttribute('data-original') && el.innerHTML.includes('|')) {
      el.setAttribute('data-original', el.innerHTML);
    }

    const originalText = el.getAttribute('data-original');
    if (originalText && originalText.includes('|')) {
      const [en, te] = originalText.split('|').map(t => t.trim());
      el.innerHTML = (lang === 'en') ? en : te;
    }
  });

  const toggleBtn = document.getElementById('langToggle');
  toggleBtn.innerText = (lang === 'en') ? 'తెలుగు' : 'English';
}

function playWelcomeAudio() {
  document.getElementById("welcomeAudio").play();
}

function playWeatherAudio() {
  document.getElementById("weatherAudio").play();
}

function playCalendarAudio() {
  document.getElementById("calendarAudio").play();
}

function playSuccessAudio() {
  document.getElementById("successAudio").play();
}


let currentIndex = 0;

function rotateCarousel() {
  const items = document.querySelectorAll('.carousel-item');
  items.forEach((item, index) => {
    item.classList.toggle('active', index === currentIndex);
  });
  currentIndex = (currentIndex + 1) % items.length;
}

setInterval(rotateCarousel, 5000); // every 5 seconds

let currentLanguage = "te";

const messages = {
  weather: {
    te: "🌤️ ఈరోజు ఉష్ణోగ్రత: 32°C, వర్షం రాకపోవచ్చు.",
    en: "🌤️ Today’s temperature: 32°C, no rain expected."
  },
  crop: {
    te: "🌾 ఈ మాసానికి తగిన పంటలు: మక్కజొన్న, శెనగలు, ధాన్యం.",
    en: "🌾 Suitable crops this month: Maize, Chickpeas, Paddy."
  },
  soil: {
    te: "🧪 మట్టి ఆరోగ్యంగా ఉంచేందుకు ఎరువులు, సేంద్రీయ ద్రావణాలు వాడండి.",
    en: "🧪 Use fertilizers and organic liquids to maintain soil health."
  },
  schemes: {
    te: "📜 ప్రస్తుత ప్రభుత్వ పథకాలు: రైతు బంధు, పీఎం కిసాన్, నీటి పాలన పథకం.",
    en: "📜 Active government schemes: Rythu Bandhu, PM-KISAN, Water Management."
  }
};

const questions = {
  weather: {
    te: "🌦️ వాతావరణం వివరాలు చెప్పు",
    en: "🌦️ Tell me about the weather"
  },
  crop: {
    te: "🌾 నేను ఏ పంటలు వేయాలి?",
    en: "🌾 What crops should I grow?"
  },
  soil: {
    te: "🧪 మట్టి సమాచారం ఇవ్వండి",
    en: "🧪 Give soil suggestions"
  },
  schemes: {
    te: "📜 నాకు లభించే పథకాలు ఏవి?",
    en: "📜 Which schemes are available?"
  }
};

const buttonLabels = {
  weather: {
    te: "🌦️ వాతావరణం",
    en: "🌦️ Weather"
  },
  crop: {
    te: "🌾 పంటలు",
    en: "🌾 Crops"
  },
  soil: {
    te: "🧪 మట్టి సమాచారం",
    en: "🧪 Soil Info"
  },
  schemes: {
    te: "📜 ప్రభుత్వ పథకాలు",
    en: "📜 Govt Schemes"
  }
};

function toggleChat() {
  document.getElementById("chatBox").classList.toggle("hidden");
  updateButtons();
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "te" ? "en" : "te";
  document.getElementById("langToggle").textContent = currentLanguage === "te" ? "🌐 తెలుగు" : "🌐 English";
  updateButtons();
}

function updateButtons() {
  document.querySelectorAll(".chat-buttons button").forEach((btn, i) => {
    const keys = ["weather", "crop", "soil", "schemes"];
    btn.textContent = buttonLabels[keys[i]][currentLanguage];
  });
}

function handleOption(topic) {
  const userMsg = questions[topic][currentLanguage];
  const botMsg = messages[topic][currentLanguage];

  addMessage(userMsg, "user");
  setTimeout(() => addMessage(botMsg, "bot"), 600);
}

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.textContent = text;
  document.getElementById("chatHistory").appendChild(div);
  div.scrollIntoView({ behavior: "smooth" });
}

