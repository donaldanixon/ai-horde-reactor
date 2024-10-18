function FetchCurrentWorkerCount() {
    return false
}

function FetchImageModels() {
    return false
}

function FetchTextModels() {
    return false
}

function FetchUser(apiKey) {
    const headers = {
        'Client-Agent': 'ai-horde-reactor:0:0.1',
        accept: 'application/json',
        apiKey: apiKey
      }
    
      return fetch('https://aihorde.net/api/v2/find_user', { headers: headers })
      .then(response => response.json())
      .then(data => {
        if (data.id !== undefined) {
          return data
        } else {
          return false
        }
      })
      .catch(error => console.error(error))
}
  
export { FetchImageModels, FetchTextModels, FetchUser, FetchCurrentWorkerCount }
  