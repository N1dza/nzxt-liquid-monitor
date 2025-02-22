// NZXT API integracija za čitanje podataka o temperaturi
window.nzxt = {
  v1: {
    onMonitoringDataUpdate: function(data) {
      // Izdvajanje podataka o tečnosti (kraken, liquids ili liq)
      const { kraken, liquids, liq } = data;

      // Proveravamo koje podatke imamo
      let temperature = null;

      // Ako imamo podatke o Kraken tečnosti
      if (kraken && kraken.temperature !== undefined) {
        temperature = kraken.temperature;
      }
      // Ako imamo podatke o Liquids tečnosti
      else if (liquids && liquids.length > 0 && liquids[0].temperature !== undefined) {
        temperature = liquids[0].temperature;
      }
      // Ako imamo podatke o Liq tečnosti
      else if (liq && liq.length > 0 && liq[0].temperature !== undefined) {
        temperature = liq[0].temperature;
      }

      // Ako smo dobili temperaturu, ažuriraj je na stranici
      if (temperature !== null) {
        updateTemperature(temperature);
      }
    }
  }
}

// Funkcija koja ažurira temperaturu na stranici
function updateTemperature(temperature) {
  const temperatureElement = window.document.getElementById('temperature');
  
  if (temperatureElement) {
    temperatureElement.innerText = temperature + "°C"; // Ažuriraj prikaz temperature
  }
}
