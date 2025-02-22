// NZXT API integracija za čitanje podataka o Kraken temperaturi
window.nzxt = {
  v1: {
    onMonitoringDataUpdate: function(data) {
      // Izdvajanje podataka o Kraken-u
      const { kraken } = data;

      // Uzimamo samo Kraken temperaturu (liquidTemperature)
      const temperature = kraken.liquidTemperature;

      // Ako imamo temperaturu, ažuriramo prikaz na stranici
      if (temperature !== undefined) {
        updateTemperature(temperature);
      }
    }
  }
}

// Funkcija koja ažurira temperaturu na stranici
function updateTemperature(temperature) {
  const temperatureElement = window.document.getElementById('temperature');
  
  if (temperatureElement) {
    // Ažuriraj prikaz temperature
    temperatureElement.innerText = temperature; // Ispis broja
  }
}
