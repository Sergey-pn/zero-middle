import {type CSSProperties, useEffect, useState} from 'react'
import './App.css'

type Attachments = {
    url: string
}
type TrackAttributes = {
    title: string
    attachments: Attachments[]
}
type Track = {
    id: string
    attributes: TrackAttributes
}

type TrackDetailsAttributes = {
    title: string
    lyrics: string
    attachments: Attachments[]
}
type TrackDetailsResource = {
    id: string
    attributes: TrackDetailsAttributes
}

export function App() {
    const [tracks, setTracks] = useState<Track[] | null>(null)
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)
    const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
            headers: {
                'api-key': 'cab78ea3-4b7c-4393-8450-8862528d9373'
            }
        })
            .then(res => res.json())
            .then(json => setTracks(json.data))
    }, [])

    const handleSelectTrack = (trackId: string) => {
        setSelectedTrackId(trackId)

        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
            headers: {
                'api-key': 'cab78ea3-4b7c-4393-8450-8862528d9373'
            }
        })
            .then(res => res.json())
            .then(json => setSelectedTrack(json.data))
    }

    return (
        <>
            <h1>MusicFun</h1>
            {tracks === null && <span>Loading...</span>}
            {tracks?.length === 0 && <span>No tracks</span>}
            <ul>
                {tracks?.map(track => {
                    const style: CSSProperties = {}
                    if (track.id === selectedTrackId) {
                        style.border = '1px solid orange'
                    }
                    const handleClick = () => {
                        handleSelectTrack(track.id)
                    }
                    return <li key={track.id} style={style}>
                        <div onClick={handleClick}>{track.attributes.title}</div>
                        <audio src={track.attributes.attachments[0].url} controls></audio>
                    </li>
                })}
            </ul>
            <hr/>
            <h2>Track Details</h2>
            {!selectedTrackId && <span>No selected track</span>}
            {selectedTrackId && !selectedTrack && <span>Loading...</span>}
            {selectedTrack && <div>
                <h4>{selectedTrack.attributes.title}</h4>
                <p>
                    {selectedTrack.attributes.lyrics}
                </p>
            </div>}
            {selectedTrackId && selectedTrack && selectedTrack.id !== selectedTrackId && <span>Loading...</span>}
        </>
    )
}
