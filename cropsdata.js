function getPredictionData() {
  return [
    {
      name: { en: "Rice", te: "బియ్యం" },
      confidenceScore: "92",
      growthDuration: { en: "120 days", te: "120 రోజులు" },
      waterNeeds: { en: "High", te: "అధికం" },
      yield: { en: "6 tons/ha", te: "6 టన్నులు/హె" },
      marketValue: { en: "₹18/kg", te: "₹18/కి.గ్రా" },
      fertilizers: { en: ["Urea", "DAP", "Potash"], te: ["యూరియా", "డిఏపీ", "పొటాష్"] }
    },
    {
      name: { en: "Maize", te: "మక్కజొన్న" },
      confidenceScore: "85",
      growthDuration: { en: "100 days", te: "100 రోజులు" },
      waterNeeds: { en: "Moderate", te: "మధ్యమం" },
      yield: { en: "5 tons/ha", te: "5 టన్నులు/హె" },
      marketValue: { en: "₹14/kg", te: "₹14/కి.గ్రా" },
      fertilizers: { en: ["NPK", "Zinc Sulphate"], te: ["ఎన్‌పికె", "జింక్ సల్ఫేట్"] }
    },
    {
      name: { en: "Cotton", te: "పత్తి" },
      confidenceScore: "78",
      growthDuration: { en: "150 days", te: "150 రోజులు" },
      waterNeeds: { en: "Low", te: "తక్కువ" },
      yield: { en: "2 tons/ha", te: "2 టన్నులు/హె" },
      marketValue: { en: "₹45/kg", te: "₹45/కి.గ్రా" },
      fertilizers: { en: ["NPK", "Magnesium Sulphate"], te: ["ఎన్‌పికె", "మాగ్నీషియం సల్ఫేట్"] }
    },
    {
      name: { en: "Groundnut", te: "వేరుసెనగ" },
      confidenceScore: "81",
      growthDuration: { en: "110 days", te: "110 రోజులు" },
      waterNeeds: { en: "Low", te: "తక్కువ" },
      yield: { en: "3 tons/ha", te: "3 టన్నులు/హె" },
      marketValue: { en: "₹35/kg", te: "₹35/కి.గ్రా" },
      fertilizers: { en: ["Gypsum", "Super Phosphate"], te: ["జిప్సం", "సూపర్ ఫాస్ఫేట్"] }
    },
    {
      name: { en: "Soybean", te: "సోయాబీన్" },
      confidenceScore: "87",
      growthDuration: { en: "95 days", te: "95 రోజులు" },
      waterNeeds: { en: "Moderate", te: "మధ్యమం" },
      yield: { en: "2.5 tons/ha", te: "2.5 టన్నులు/హె" },
      marketValue: { en: "₹40/kg", te: "₹40/కి.గ్రా" },
      fertilizers: { en: ["DAP", "Zinc"], te: ["డిఏపీ", "జింక్"] }
    },
    {
      name: { en: "Sorghum", te: "జొన్న" },
      confidenceScore: "75",
      growthDuration: { en: "85 days", te: "85 రోజులు" },
      waterNeeds: { en: "Low", te: "తక్కువ" },
      yield: { en: "4 tons/ha", te: "4 టన్నులు/హె" },
      marketValue: { en: "₹13/kg", te: "₹13/కి.గ్రా" },
      fertilizers: { en: ["NPK", "Compost"], te: ["ఎన్‌పికె", "కంపోస్ట్"] }
    },
    {
      name: { en: "Chilli", te: "మిరపకాయలు" },
      confidenceScore: "93",
      growthDuration: { en: "120-150 days", te: "120-150 రోజులు" },
      waterNeeds: { en: "Moderate", te: "మధ్యమం" },
      yield: { en: "1.5 tons/ha", te: "1.5 టన్నులు/హె" },
      marketValue: { en: "₹80/kg", te: "₹80/కి.గ్రా" },
      fertilizers: { en: ["Organic Compost", "NPK"], te: ["సేంద్రీయ కంపోస్ట్", "ఎన్‌పికె"] }
    },
    {
      name: { en: "Tomato", te: "టమోటా" },
      confidenceScore: "88",
      growthDuration: { en: "90 days", te: "90 రోజులు" },
      waterNeeds: { en: "High", te: "అధికం" },
      yield: { en: "30 tons/ha", te: "30 టన్నులు/హె" },
      marketValue: { en: "₹20/kg", te: "₹20/కి.గ్రా" },
      fertilizers: { en: ["Compost", "FYM", "NPK"], te: ["కంపోస్ట్", "ఎఫ్‌వైఎమ్", "ఎన్‌పికె"] }
    },
    {
      name: { en: "Pigeon Pea", te: "కందులు" },
      confidenceScore: "82",
      growthDuration: { en: "180 days", te: "180 రోజులు" },
      waterNeeds: { en: "Low", te: "తక్కువ" },
      yield: { en: "1.8 tons/ha", te: "1.8 టన్నులు/హె" },
      marketValue: { en: "₹65/kg", te: "₹65/కి.గ్రా" },
      fertilizers: { en: ["Rhizobium", "Phosphate"], te: ["రైజోబియం", "ఫాస్ఫేట్"] }
    },
    {
      name: { en: "Sugarcane", te: "చిన్నగెడ్డ" },
      confidenceScore: "95",
      growthDuration: { en: "300-365 days", te: "300-365 రోజులు" },
      waterNeeds: { en: "Very High", te: "చాలా అధికం" },
      yield: { en: "80 tons/ha", te: "80 టన్నులు/హె" },
      marketValue: { en: "₹3/kg", te: "₹3/కి.గ్రా" },
      fertilizers: { en: ["NPK", "Organic Manure", "Magnesium"], te: ["ఎన్‌పికె", "సేంద్రీయ ఎరువులు", "మాగ్నీషియం"] }
    },
    {
      name: { en: "Wheat", te: "గోధుమలు" },
      confidenceScore: "86",
      growthDuration: { en: "120 days", te: "120 రోజులు" },
      waterNeeds: { en: "Moderate", te: "మధ్యమం" },
      yield: { en: "4 tons/ha", te: "4 టన్నులు/హె" },
      marketValue: { en: "₹22/kg", te: "₹22/కి.గ్రా" },
      fertilizers: { en: ["Urea", "DAP", "Potash"], te: ["యూరియా", "డిఏపీ", "పొటాష్"] }
    },
    {
      name: { en: "Banana", te: "అరటి" },
      confidenceScore: "91",
      growthDuration: { en: "270-300 days", te: "270-300 రోజులు" },
      waterNeeds: { en: "High", te: "అధికం" },
      yield: { en: "40 tons/ha", te: "40 టన్నులు/హె" },
      marketValue: { en: "₹15/kg", te: "₹15/కి.గ్రా" },
      fertilizers: { en: ["FYM", "Potash", "DAP"], te: ["ఎఫ్‌వైఎమ్", "పొటాష్", "డిఏపీ"] }
    },
    {
      name: { en: "Onion", te: "ఉల్లిపాయలు" },
      confidenceScore: "84",
      growthDuration: { en: "90-120 days", te: "90-120 రోజులు" },
      waterNeeds: { en: "Moderate", te: "మధ్యమం" },
      yield: { en: "25 tons/ha", te: "25 టన్నులు/హె" },
      marketValue: { en: "₹25/kg", te: "₹25/కి.గ్రా" },
      fertilizers: { en: ["Super Phosphate", "Potash"], te: ["సూపర్ ఫాస్ఫేట్", "పొటాష్"] }
    },
    {
      name: { en: "Brinjal", te: "వంకాయ" },
      confidenceScore: "89",
      growthDuration: { en: "100 days", te: "100 రోజులు" },
      waterNeeds: { en: "High", te: "అధికం" },
      yield: { en: "30 tons/ha", te: "30 టన్నులు/హె" },
      marketValue: { en: "₹18/kg", te: "₹18/కి.గ్రా" },
      fertilizers: { en: ["Organic Manure", "NPK"], te: ["సేంద్రీయ ఎరువులు", "ఎన్‌పికె"] }
    },
    {
      name: { en: "Pumpkin", te: "గుమ్మడికాయ" },
      confidenceScore: "79",
      growthDuration: { en: "120 days", te: "120 రోజులు" },
      waterNeeds: { en: "Moderate", te: "మధ్యమం" },
      yield: { en: "20 tons/ha", te: "20 టన్నులు/హె" },
      marketValue: { en: "₹12/kg", te: "₹12/కి.గ్రా" },
      fertilizers: { en: ["FYM", "Compost"], te: ["ఎఫ్‌వైఎమ్", "కంపోస్ట్"] }
    },
    {
      name: { en: "Carrot", te: "కారెట్" },
      confidenceScore: "88",
      growthDuration: { en: "75-90 days", te: "75-90 రోజులు" },
      waterNeeds: { en: "High", te: "అధికం" },
      yield: { en: "25 tons/ha", te: "25 టన్నులు/హె" },
      marketValue: { en: "₹20/kg", te: "₹20/కి.గ్రా" },
      fertilizers: { en: ["Potash", "NPK"], te: ["పొటాష్", "ఎన్‌పికె"] }
    },
    {
      name: { en: "Turmeric", te: "పసుపు" },
      confidenceScore: "90",
      growthDuration: { en: "240-270 days", te: "240-270 రోజులు" },
      waterNeeds: { en: "High", te: "అధికం" },
      yield: { en: "6 tons/ha", te: "6 టన్నులు/హె" },
      marketValue: { en: "₹90/kg", te: "₹90/కి.గ్రా" },
      fertilizers: { en: ["Compost", "NPK", "Phosphorus"], te: ["కంపోస్ట్", "ఎన్‌పికె", "ఫాస్ఫరస్"] }
    },
    {
      name: { en: "Cabbage", te: "క్యాబేజీ" },
      confidenceScore: "83",
      growthDuration: { en: "80-100 days", te: "80-100 రోజులు" },
      waterNeeds: { en: "High", te: "అధికం" },
      yield: { en: "30 tons/ha", te: "30 టన్నులు/హె" },
      marketValue: { en: "₹15/kg", te: "₹15/కి.గ్రా" },
      fertilizers: { en: ["Compost", "DAP"], te: ["కంపోస్ట్", "డిఏపీ"] }
    },
    {
      name: { en: "Spinach", te: "పాలకూర" },
      confidenceScore: "76",
      growthDuration: { en: "40-50 days", te: "40-50 రోజులు" },
      waterNeeds: { en: "Moderate", te: "మధ్యమం" },
      yield: { en: "15 tons/ha", te: "15 టన్నులు/హె" },
      marketValue: { en: "₹12/kg", te: "₹12/కి.గ్రా" },
      fertilizers: { en: ["Compost", "Nitrogen"], te: ["కంపోస్ట్", "నైట్రోజన్"] }
    }
  ];
}
