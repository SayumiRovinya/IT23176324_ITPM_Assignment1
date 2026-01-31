// Simple mock dictionary for testing
const dictionary = {
  "suba dhavasak!": "සුභ දවසක්!",
  "Oyaa saniipen innavadha?": "ඔයා සනීපෙන් ඉන්නවද?",
  "poddak inna, mama ennam.": "පොඩ්ඩක් ඉන්න, මම එන්නම්.",
  "mama haemadhaama paasal yanavaa.": "මම හැමදාම පාසල් යනවා.",
  "mama adha kaeemata innee nae.": "මම අද කෑමට ඉන්නේ නැහැ."
};

// Event listener for real-time conversion
document.getElementById("singlishInput").addEventListener("input", function() {
  const inputText = this.value.trim();
  const sinhalaOutput = dictionary[inputText] || "⚠️ No match found";
  document.getElementById("sinhalaOutput").textContent = sinhalaOutput;
});