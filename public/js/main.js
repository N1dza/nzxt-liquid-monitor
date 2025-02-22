const params = (new URL(window.location.href)).searchParams
const source = params.get('source') || 'liquid'

window.document.getElementById('source').innerText = source

function updateTemperature(temperature) {
  window.document.getElementById('temperature').innerText = temperature
}

// NZXT API: koristi 'liquid' za temperaturu tečnosti
window.nzxt = {
  v1: {
    onMonitoringDataUpdate: (data) => {
        const { liquid } = data  // Preuzimanje podataka za tečnost
        if (liquid && liquid.length > 0) {
          updateTemperature(liquid[0].temperature)  // Prikazivanje temperature tečnosti
        }
    }
  }
}
