// Import NZXT tipove
import { MonitoringData } from "@nzxt/web-integrations-types/v1";

// Ovaj kod inicijalizuje NZXT objekat i postavlja funkciju za ažuriranje podataka
window.nzxt = {
  v1: {
    // Funkcija koja se poziva svaki put kada API ažurira podatke
    onMonitoringDataUpdate: (data: MonitoringData) => {
      // Logovanje celokupnog odgovora
      console.log(data); // Ovdje ćemo proveriti strukturu podataka

      // Izdvajamo sve relevantne podatke
      const { cpus, gpus, ram, kraken, liquids, liq } = data;

      // Logovanje specifičnih podataka
      console.log("Kraken Data: ", kraken);
      console.log("Liquid Data: ", liquids);
      console.log("Liq Data: ", liq);

      // Ako imamo podatke o tečnosti, ažuriraj temperaturu
      let temperature = null;

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
