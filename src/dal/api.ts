const apiKey = 'cab78ea3-4b7c-4393-8450-8862528d9373'
const headers = {'api-key': apiKey}

export const getTrack = (trackId: string) => {
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: headers
    })
        .then(res => res.json())
}

export const getTracks = () => {
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
        headers: headers
    })
        .then(res => res.json())
}