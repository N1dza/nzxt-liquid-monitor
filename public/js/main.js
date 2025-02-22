const params = (new URL(window.location.href)).searchParams
const source = params.get('source') || 'cpu'  // Promenjeno iz 'gpu' u 'cpu'

window.document.getElementById('source').innerText = source

function updateTemperature(temperature) {
  window.document.getElementById('temperature').innerText = temperature
}

// https://github.com/NZXTCorp/web-integrations-types/blob/main/v1/index.d.ts
window.nzxt = {
  v1: {
    onMonitoringDataUpdate: (data) => {
        const { cpus } = data  // Sada uzima samo 'cpus'
        updateTemperature(cpus[0].temperature) // Koristi CPU temperaturu
    }
  }
}
