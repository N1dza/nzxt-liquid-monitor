// Ovaj kod inicijalizuje NZXT objekat i postavlja funkciju za ažuriranje podataka
window.nzxt = {
  v1: {
    // Funkcija koja se poziva svaki put kada API ažurira podatke
    onMonitoringDataUpdate: function(data) {
      // Logovanje celokupnog odgovora da bismo videli šta API vraća
      console.log("API Data: ", data); // Ovdje ćemo proveriti strukturu podataka

      // Izdvajamo sve relevantne podatke
      const { cpus, gpus, ram, kraken, liquids, liq } = data;

      // Logovanje specifičnih podataka
      console.log("Kraken Data: ", kraken); // Podaci o Kraken-u
      console.log("Liquid Data: ", liquids); // Podaci o Liquids
      console.log("Liq Data: ", liq); // Podaci o Liq

      // Pokreni debag za podatke o temperaturi
      if (kraken) {
        console.log("Kraken temperature: ", kraken.temperature); // Pokazivanje tačne temperature za Kraken
      }
      
      if (liquids) {
        console.log("Liquids temperature: ", liquids[0]?.temperature); // Pokazivanje temperature za Liquid
      }
      
      if (liq) {
        console.log("Liq temperature: ", liq[0]?.temperature); // Pokazivanje temperature za Liq
      }

      // Ako imamo podatke o tečnosti, ažuriraj temperaturu
      let temperature = null;

      // Ažuriranje temperature iz različitih izvora
      if (kraken && kraken.temperature !== undefined) {
        temperature = kraken.temperature; // Ako postoji, uzimamo temperaturu iz Kraken-a
      } else if (liquids && liquids[0]?.temperature !== undefined) {
        temperature = liquids[0].temperature; // Ako postoji, uzimamo temperaturu iz Liquids
      } else if (liq && liq[0]?.temperature !== undefined) {
        temperature = liq[0].temperature; // Ako postoji, uzimamo temperaturu iz Liq
      }

      // Ako smo našli temperaturu, ažuriramo prikaz
      if (temperature !== null) {
        updateTemperature(temperature); // Ažurira temperaturu
      } else {
        console.log("Nema podataka o tečnosti!");
      }
    }
  }
}

// Funkcija koja ažurira prikaz temperature na web stranici
function updateTemperature(temperature) {
  const temperatureElement = window.document.getElementById('temperature');
  
  if (temperatureElement) {
    temperatureElement.innerText = temperature + "°C"; // Ažurira temperaturu u HTML-u
  }
}
