// Import NZXT tipove, obavezno je da koristiš paket @nzxt/web-integrations-types
import { MonitoringData } from "@nzxt/web-integrations-types/v1";

// Ovaj kod inicijalizuje NZXT objekat i postavlja funkciju za ažuriranje podataka
window.nzxt = {
  v1: {
    // Funkcija koja se poziva svaki put kada API ažurira podatke
    onMonitoringDataUpdate: (data: MonitoringData) => {
      // Izdvajamo podatke o CPU, GPU, RAM-u i Kraken uređaju
      const { cpus, gpus, ram, kraken } = data;

      // Logovanje celokupnih podataka kako bismo proverili strukturu
      console.log(data);

      // Proveravamo postoji li podatak za temperaturu tečnosti iz Kraken uređaja
      const liquidTemperature = kraken?.temperature;

      // Ako postoji, ažuriramo temperaturu na stranici
      if (liquidTemperature !== undefined) {
        updateTemperature(liquidTemperature);
      } else {
        console.log("Nema podataka o tečnosti!");
      }
    }
  }
}

// Funkcija koja ažurira prikaz temperature na web stranici
function updateTemperature(temperature) {
  window.document.getElementById('temperature').innerText = temperature + "°C";
}
