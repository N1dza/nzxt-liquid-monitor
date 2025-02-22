const params = (new URL(window.location.href)).searchParams
const source = params.get('source') || 'liquid'

window.document.getElementById('source').innerText = source

function updateTemperature(temperature) {
  window.document.getElementById('temperature').innerText = temperature
}

// NZXT API: koristi 'liquids' umesto 'cpus'
window.nzxt = {
  v1: {
    onMonitoringDataUpdate: (data) => {
        const { liquids } = data  // Preuzimanje podataka za tečnost
        if (liquids && liquids.length > 0) {
          updateTemperature(liquids[0].temperature)  // Prikazivanje temperature tečnosti
        }
    }
  }
}
