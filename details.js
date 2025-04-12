let currentLang = "en";
let currentDistrict = null;

// DOM Elements
const modeToggle = document.getElementById("mode-toggle");
const modeLabel = document.getElementById("mode-label");
const languageToggle = document.getElementById("language-toggle");
const manualEntrySection = document.getElementById("manual-entry");
const districtNameEl = document.getElementById("district-name");

// Input fields
const fields = [
  "rainfall",
  "temperature",
  "soil",
  "humidity",
  "ph",
  "water",
  "fertilizers",
  "irrigation",
];

// Bilingual placeholders
const placeholders = {
  rainfall: { en: "Enter rainfall", te: "వర్షపాతం నమోదు చేయండి" },
  temperature: { en: "Enter temperature", te: "ఉష్ణోగ్రత నమోదు చేయండి" },
  soil: { en: "Enter soil type", te: "మట్టి రకం నమోదు చేయండి" },
  humidity: { en: "Enter humidity", te: "ఆర్ద్రత నమోదు చేయండి" },
  ph: { en: "Enter pH level", te: "పిహెచ్ స్థాయి నమోదు చేయండి" },
  water: { en: "e.g., River, Borewell", te: "ఉదా: నది, బోరువెల్" },
  fertilizers: { en: "Enter fertilizers", te: "ఎరువులు నమోదు చేయండి" },
  irrigation: { en: "e.g., Drip or Flood", te: "Drip లేదా Flood | ఫ్లడ్" },
};

// Set placeholders based on language
function updatePlaceholders() {
  fields.forEach((field) => {
    document.getElementById(field).placeholder = placeholders[field][currentLang];
  });
}

// Update selected district heading
function updateDistrictName() {
  if (currentDistrict) {
    districtNameEl.textContent = currentLang === "en"
      ? `Selected District: ${currentDistrict}`
      : `ఎంచుకున్న జిల్లా: ${districtData[currentDistrict].telugu}`;
  } else {
    districtNameEl.textContent = currentLang === "en"
      ? "Selected District:"
      : "ఎంచుకున్న జిల్లా:";
  }
}

// Fill data to input fields
function fillDistrictData(district) {
  const data = districtData[district];
  if (!data) return;

  currentDistrict = district;
  updateDistrictName();

  document.getElementById("rainfall").value = currentLang === "en" ? data.rainfall : data.rainfall_te;
  document.getElementById("temperature").value = currentLang === "en" ? data.temperature : data.temperature_te;
  document.getElementById("soil").value = currentLang === "en" ? data.soil : data.soil_te;
  document.getElementById("humidity").value = currentLang === "en" ? data.humidity : data.humidity_te;
  document.getElementById("ph").value = currentLang === "en" ? data.ph : data.ph_te;
  document.getElementById("water").value = currentLang === "en" ? data.water : data.water_te;
  document.getElementById("fertilizers").value = currentLang === "en" ? data.fertilizers : data.fertilizers_te;
  document.getElementById("irrigation").value = currentLang === "en" ? data.irrigation : data.irrigation_te;
}

// Clear input fields
function clearFields() {
  fields.forEach((field) => {
    document.getElementById(field).value = "";
  });
  updateDistrictName();
}

// On page load
document.addEventListener("DOMContentLoaded", () => {
  modeToggle.checked = false; // Manual mode by default
  manualEntrySection.style.display = "block";

  updatePlaceholders();
  updateDistrictName();
});

// Mode toggle: auto/manual
modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    // Auto Mode ON
    manualEntrySection.style.display = "none";
    const urlParams = new URLSearchParams(window.location.search);
    const district = urlParams.get("district");

    if (district && districtData[district]) {
      currentDistrict = district;
      fillDistrictData(district);
    } else {
      clearFields();
    }
  } else {
    // Manual Mode ON
    manualEntrySection.style.display = "block";
    clearFields();
  }
});

// Manual Load Button
document.getElementById("load-button").addEventListener("click", () => {
  const districtName = document.getElementById("manual-district").value.trim();
  if (districtData[districtName]) {
    currentDistrict = districtName;
    fillDistrictData(districtName);
  } else {
    alert(currentLang === "en" ? "District not found" : "జిల్లా కనుగొనబడలేదు. సరిగా నమోదు చేయండి");
  }
});

// Language toggle
languageToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "te" : "en";
  languageToggle.textContent = currentLang === "en" ? "English" : "తెలుగు";
  modeLabel.textContent = currentLang === "en" ? "Auto | Manual" : "స్వయంచాలిత | మాన్యువల్";
  document.getElementById("manual-label").textContent = currentLang === "en"
    ? "Manual District Name"
    : "జిల్లా పేరు (మెనువల్)";
  updatePlaceholders();
  updateDistrictName();

  if (modeToggle.checked && currentDistrict) {
    fillDistrictData(currentDistrict);
  }
});


