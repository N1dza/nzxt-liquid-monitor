// Import NZXT tipove
import { MonitoringData } from "@nzxt/web-integrations-types/v1";

// Ovaj kod inicijalizuje NZXT objekat i postavlja funkciju za ažuriranje podataka
window.nzxt = {
  v1: {
    // Funkcija koja se poziva svaki put kada API ažurira podatke
    onMonitoringDataUpdate: (data: MonitoringData) => {
      // Izdvajamo samo Kraken podatke
      const { kraken } = data;

      // Logovanje podataka specifičnih za Kraken uređaj
      console.log("Kraken Data: ", kraken);

      // Ako postoje podaci o temperaturi tečnosti, ažuriraj prikaz
      if (kraken && kraken.temperature !== undefined) {
        console.log("Kraken Liquid Temperature: ", kraken.temperature); // Loguj temperaturu
        updateTemperature(kraken.temperature); // Ažuriraj temperaturu
      } else {
        console.log("Nema podataka o tečnosti za Kraken!");
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
