function HordeHealth() {
    const headers = {
      'Client-Agent': 'ai-horde-reactor:0:0.1',
      accept: 'application/json'
    }
    return fetch('https://aihorde.net/api/v2/status/heartbeat', { headers: headers })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'OK') {
          return true
        } else {
          return false
        }
      })
      .catch(error => console.error(error))
  }
  
export default HordeHealth
  