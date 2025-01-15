document.addEventListener("DOMContentLoaded", () => {
  // Selectează toate elementele din .details
  const detailsElements = document.querySelectorAll(
    ".details-section .details > *"
  );

  // Callback pentru Intersection Observer
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Adaugă clasa "_visible" când elementul devine vizibil
        entry.target.classList.add("_visible");
        observer.unobserve(entry.target); // Oprește observarea după activare
      }
    });
  };

  // Opțiuni pentru Intersection Observer
  const observerOptions = {
    threshold: 0.1, // Elementul este considerat vizibil dacă 10% din el este în viewport
  };

  // Creează observer-ul
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Atașează observer-ul fiecărui element
  detailsElements.forEach((element) => {
    observer.observe(element);
  });
});
