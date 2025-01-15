const quotesList = [
  '"The greatest luxury is being free." – Manolo Blahnik',
  '"Pessimism is a luxury that a Jew can never allow himself." – Golda Meir',
  '"Time will pass, and seasons will come and go." – Roy Bean',
  '"Luxury is attention to detail, originality, exclusivity, and above all, quality." – Angelo Bonati',
  '"A watch is not just a timepiece, it is a symbol of your personality." – Unknown',
];

// Selectează elementul `.quotes`
const quotesElement = document.querySelector(".quotes");

// Index-ul curent al citatului
let currentIndex = 0;

// Funcția pentru a actualiza citatul
function updateQuote() {
  // Ascunde citatul actual prin scăderea opacității
  quotesElement.style.opacity = "0";

  // Așteaptă 500ms pentru tranziție, apoi schimbă textul
  setTimeout(() => {
    // Actualizează textul citatului
    quotesElement.textContent = quotesList[currentIndex];

    // Crește index-ul sau îl resetează la început dacă este ultimul citat
    currentIndex = (currentIndex + 1) % quotesList.length;

    // Reafirmă opacitatea pentru a afișa noul citat
    quotesElement.style.opacity = "1";
  }, 500); // Timpul trebuie să fie sincronizat cu durata tranziției din CSS
}

// Setează un interval pentru a actualiza citatele automat
setInterval(updateQuote, 4000); // Schimbă citatele la fiecare 4 secunde
