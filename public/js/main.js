const params = (new URL(window.location.href)).searchParams;
const source = params.get('source') || 'liquid';

window.document.getElementById('source').innerText = source;

// Funkcija za ažuriranje temperature
function updateTemperature(temperature) {
  window.document.getElementById('temperature').innerText = temperature;
}

// Proveri podatke kada se ažurira monitoring
window.nzxt = {
  v1: {
    onMonitoringDataUpdate: (data) => {
      console.log(data);  // Ispisuje celu strukturu podataka u konzolu

      // Preuzimanje podataka o tečnosti
      const liquid_temperature = data.liquid_temperature;  // Pretpostavka: liquid_temperature je naziv iz API-a
      if (liquid_temperature !== undefined) {
        updateTemperature(liquid_temperature);  // Ažuriraj temperaturu
      } else {
        console.log("Nema podataka o tečnosti!");
      }
    }
  }
}
